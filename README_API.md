# Video Upload API - Quick Start

This document provides a quick reference for the video upload API implementation.

## Overview

The video upload system allows users to upload videos (feed, reel, or story) directly to Google Cloud Storage through a Vercel serverless function.

## Architecture

```
Frontend (React) → API Endpoint (/api/upload-video) → Google Cloud Storage
```

## Files Created/Modified

1. **`api/upload-video.js`** - Vercel serverless function that handles video uploads
2. **`src/components/VideoUpload.jsx`** - Updated to call the real API
3. **`package.json`** - Added dependencies: @google-cloud/storage, uuid, formidable
4. **`vercel.json`** - Vercel configuration for API function limits
5. **`GCS_SETUP.md`** - Detailed setup instructions

## Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up GCS Bucket

1. Create a bucket named `video_loader` in Google Cloud Storage
2. Create three folders: `feed/`, `reel/`, `story/`
3. Create a service account with Storage Admin permissions
4. Download the service account JSON key

### 3. Configure Vercel Environment Variables

In your Vercel project settings, add:

- `GCS_PROJECT_ID` - Your GCP project ID
- `GCS_CREDENTIALS` - Full JSON key content as a single-line string

### 4. Deploy

```bash
git add .
git commit -m "Add GCS video upload"
git push
```

Vercel will automatically deploy.

## API Endpoint

**URL:** `/api/upload-video`

**Method:** `POST`

**Content-Type:** `multipart/form-data`

**Request Fields:**
- `video` (file) - The video file to upload
- `videoType` (string) - One of: `feed`, `reel`, `story`
- `companyName` (string) - Company name (required)
- `companyId` (string, optional) - Company ID
- `caption` (string) - Video caption (required)

**Response (Success):**
```json
{
  "success": true,
  "message": "Video uploaded successfully",
  "data": {
    "videoUrl": "https://storage.googleapis.com/video_loader/feed/uuid.mp4",
    "fileName": "uuid.mp4",
    "filePath": "feed/uuid.mp4",
    "videoType": "feed",
    "companyName": "Company Name",
    "companyId": "123",
    "caption": "Video caption",
    "uploadedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Response (Error):**
```json
{
  "error": "Error message",
  "details": "Additional error details"
}
```

## Testing Locally

For local testing, you'll need to:

1. Create a `.env.local` file with your GCS credentials
2. Use Vercel CLI to run the serverless function locally:

```bash
npm install -g vercel
vercel dev
```

Or use a tool like Postman/Insomnia to test the endpoint directly.

## File Storage Structure

Videos are stored in GCS as:

```
video_loader/
  ├── feed/
  │   └── [uuid].mp4
  ├── reel/
  │   └── [uuid].mp4
  └── story/
      └── [uuid].mp4
```

## Security Notes

- Never commit `.env` files or service account keys
- The API makes uploaded files publicly accessible by default
- Consider adding authentication/authorization to the API endpoint
- Set up CORS policies on your GCS bucket if needed
- Use more restrictive IAM roles in production

## Troubleshooting

See `GCS_SETUP.md` for detailed troubleshooting steps.

Common issues:
- **"GCS storage not initialized"** - Check environment variables
- **"Permission denied"** - Verify service account permissions
- **"Bucket not found"** - Ensure bucket name is exactly `video_loader`

## Next Steps

1. Add authentication to the API endpoint
2. Implement video processing/transcoding
3. Add thumbnail generation
4. Set up CDN for faster video delivery
5. Add video metadata extraction
6. Implement progress tracking for large uploads

