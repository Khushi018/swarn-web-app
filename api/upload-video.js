import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Google Cloud Storage
let storage;
const bucketName = 'video_loader';

// Initialize storage on module load
try {
  // First, try to use environment variables (for Vercel deployment)
  if (process.env.GCS_PROJECT_ID && process.env.GCS_CREDENTIALS) {
    storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: JSON.parse(process.env.GCS_CREDENTIALS),
    });
  } 
  // Otherwise, try to load from local JSON file (for local development)
  else {
    // Try multiple possible paths for the credentials file
    const possiblePaths = [
      path.join(__dirname, '..', 'gen-lang-client-0665888431-038f11096cad.json'), // Project root
      path.join(process.cwd(), 'gen-lang-client-0665888431-038f11096cad.json'), // Current working directory
      path.join(__dirname, 'gen-lang-client-0665888431-038f11096cad.json'), // Same directory as API
    ];
    
    let credentialsPath = null;
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        credentialsPath = testPath;
        break;
      }
    }
    
    if (credentialsPath) {
      try {
        const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
        storage = new Storage({
          projectId: credentials.project_id,
          credentials: credentials,
        });
        console.log(`GCS initialized from local credentials file: ${credentialsPath}`);
      } catch (error) {
        console.error('Error reading credentials file:', error);
      }
    } else {
      console.warn('GCS credentials not found. Please set GCS_PROJECT_ID and GCS_CREDENTIALS environment variables or add credentials JSON file.');
    }
  }
} catch (error) {
  console.error('Error initializing GCS:', error);
}

export default async function handler(req, res) {
  // Ensure we always send a response, even if there's an error
  const sendResponse = (status, data) => {
    if (!res.headersSent) {
      res.status(status);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.json(data);
    }
  };

  // Wrap everything in a try-catch to ensure we always return a response
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
      return sendResponse(200, { message: 'OK' });
    }

    if (req.method !== 'POST') {
      return sendResponse(405, { error: 'Method not allowed' });
    }

    if (!storage) {
      return sendResponse(500, { 
        error: 'GCS storage not initialized', 
        details: 'Check GCS_PROJECT_ID and GCS_CREDENTIALS environment variables' 
      });
    }

    // Parse multipart/form-data
    try {
      console.log('Starting form parsing...');
      console.log('Request headers:', JSON.stringify(req.headers, null, 2));
      
      // Parse multipart/form-data using busboy (more compatible with Vercel)
      const fields = {};
      let videoFile = null;
      let videoFileName = null;
      let videoMimeType = 'video/mp4';
      const tempFiles = [];

      const bb = busboy({ headers: req.headers });
      console.log('Busboy instance created');

      // Parse form fields
      bb.on('field', (name, value) => {
        fields[name] = value;
      });

      // Parse file upload
      let fileWritePromise = Promise.resolve();
      bb.on('file', (name, file, info) => {
        const { filename, encoding, mimeType } = info;
        videoFileName = filename;
        videoMimeType = mimeType || 'video/mp4';
        
        // Create temporary file path (use /tmp for Vercel serverless)
        const tempFilePath = path.join('/tmp', `${uuidv4()}-${filename}`);
        tempFiles.push(tempFilePath);
        
        const writeStream = fs.createWriteStream(tempFilePath);
        file.pipe(writeStream);

        videoFile = tempFilePath;
        
        // Wait for file to finish writing
        fileWritePromise = new Promise((resolve, reject) => {
          writeStream.on('finish', resolve);
          writeStream.on('error', reject);
        });
      });

      // Wait for busboy to finish parsing
      console.log('Starting busboy parsing...');
      await new Promise((resolve, reject) => {
        let finished = false;
        const cleanup = () => {
          if (!finished) {
            finished = true;
          }
        };
        
        bb.on('finish', () => {
          console.log('Busboy finished parsing');
          cleanup();
          resolve();
        });
        
        bb.on('error', (err) => {
          cleanup();
          console.error('Busboy error:', err);
          reject(err);
        });
        
        // Pipe request to busboy
        try {
          console.log('Attempting to pipe request...');
          if (typeof req.pipe === 'function') {
            req.pipe(bb);
            console.log('Request piped successfully');
          } else {
            console.log('req.pipe not available, using manual read');
            // Fallback: read request body manually
            const chunks = [];
            req.on('data', chunk => {
              chunks.push(chunk);
              bb.write(chunk);
            });
            req.on('end', () => {
              bb.end();
            });
            req.on('error', reject);
          }
        } catch (pipeError) {
          cleanup();
          console.error('Pipe error:', pipeError);
          reject(new Error(`Failed to pipe request: ${pipeError.message}`));
        }
      });

      // Wait for file write to complete
      console.log('Waiting for file write to complete...');
      await fileWritePromise;
      console.log('File write completed');

    // Extract form fields
    const videoType = fields.videoType;
    const companyName = fields.companyName;
    const companyId = fields.companyId;
    const caption = fields.caption;

    // Validate required fields
    if (!videoType || !['feed', 'reel', 'story'].includes(videoType)) {
      // Clean up temp files
      tempFiles.forEach(f => {
        try { fs.unlinkSync(f); } catch (e) {}
      });
      return sendResponse(400, { error: 'Invalid video type. Must be feed, reel, or story' });
    }

    if (!companyName) {
      tempFiles.forEach(f => {
        try { fs.unlinkSync(f); } catch (e) {}
      });
      return sendResponse(400, { error: 'Company name is required' });
    }

    if (!caption) {
      tempFiles.forEach(f => {
        try { fs.unlinkSync(f); } catch (e) {}
      });
      return sendResponse(400, { error: 'Caption is required' });
    }

    if (!videoFile || !fs.existsSync(videoFile)) {
      tempFiles.forEach(f => {
        try { fs.unlinkSync(f); } catch (e) {}
      });
      return sendResponse(400, { error: 'Video file is required or file upload failed' });
    }

    const fileExtension = videoFileName?.split('.').pop() || 'mp4';
    const fileName = `${uuidv4()}.${fileExtension}`;
    
    // Determine folder based on video type
    const folder = videoType; // feed, reel, or story
    const filePath = `${folder}/${fileName}`;

    // Read file buffer
    const fileBuffer = fs.readFileSync(videoFile);

    // Upload to GCS
    const bucket = storage.bucket(bucketName);
    const gcsFile = bucket.file(filePath);

    // Upload file
    await gcsFile.save(fileBuffer, {
      metadata: {
        contentType: videoMimeType,
        metadata: {
          companyName,
          companyId: companyId || '',
          caption,
          originalFileName: videoFileName || fileName,
          uploadedAt: new Date().toISOString(),
        },
      },
    });

    // Make the file publicly accessible
    await gcsFile.makePublic();

    // Get public URL
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

    // Clean up temporary files
    tempFiles.forEach(tempFile => {
      try {
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      } catch (unlinkError) {
        console.warn('Error deleting temp file:', unlinkError);
      }
    });

    // Return success response
    return sendResponse(200, {
      success: true,
      message: 'Video uploaded successfully',
      data: {
        videoUrl: publicUrl,
        fileName,
        filePath,
        videoType,
        companyName,
        companyId: companyId || null,
        caption,
        uploadedAt: new Date().toISOString(),
      },
    });

    } catch (parseError) {
      console.error('Form parsing error:', parseError);
      console.error('Parse error stack:', parseError.stack);
      return sendResponse(400, { 
        error: 'Failed to parse form data', 
        details: parseError.message || 'Unknown parsing error',
        stack: process.env.NODE_ENV === 'development' ? parseError.stack : undefined
      });
    }

  } catch (error) {
    console.error('Upload handler error:', error);
    console.error('Error stack:', error.stack);
    
    // Ensure we always return JSON - don't let errors prevent response
    return sendResponse(500, { 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error.message : 'Failed to upload video',
      type: error.name || 'UnknownError',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

// Disable default body parser to handle multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};
