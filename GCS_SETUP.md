# Google Cloud Storage Setup Guide

This guide will help you set up video uploads to Google Cloud Storage (GCS) for your Vercel deployment.

## Prerequisites

1. A Google Cloud Platform (GCP) account
2. A GCS bucket named `video_loader`
3. GCP service account with Storage Admin permissions

## Step 1: Create GCS Bucket

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **Cloud Storage** > **Buckets**
3. Click **Create Bucket**
4. Name it `video_loader`
5. Choose your preferred region
6. Set access control to **Uniform**
7. Create the bucket

## Step 2: Create Folders in Bucket

After creating the bucket, create three folders:
- `feed/` - for feed videos
- `reel/` - for reel videos
- `story/` - for story videos

You can do this by uploading a dummy file to each folder path, or use the gsutil command:
```bash
gsutil mkdir gs://video_loader/feed
gsutil mkdir gs://video_loader/reel
gsutil mkdir gs://video_loader/story
```

## Step 3: Create Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Name it `video-uploader` (or any name you prefer)
4. Grant it the **Storage Admin** role (or **Storage Object Admin** for more restricted access)
5. Click **Done**

## Step 4: Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Download the JSON file

## Step 5: Set Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following environment variables:

### Required Environment Variables

```
GCS_PROJECT_ID=your-gcp-project-id
GCS_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

**Important Notes:**
- `GCS_PROJECT_ID`: Your GCP project ID (found in GCP dashboard)
- `GCS_CREDENTIALS`: The entire contents of the JSON key file you downloaded, as a single-line JSON string

### How to Format GCS_CREDENTIALS

The `GCS_CREDENTIALS` should be the entire JSON object from your service account key file, but formatted as a single line string. You can:

1. Copy the entire JSON file content
2. Minify it (remove all line breaks and extra spaces)
3. Escape any quotes if needed
4. Paste it as the value

Or use this command to format it:
```bash
cat your-service-account-key.json | jq -c
```

## Step 6: Install Dependencies

Make sure all dependencies are installed:
```bash
npm install
```

## Step 7: Deploy to Vercel

1. Commit your changes:
```bash
git add .
git commit -m "Add GCS video upload functionality"
git push
```

2. Vercel will automatically deploy your changes

## Step 8: Test the Upload

1. Navigate to your deployed app
2. Go to Sidebar > Upload Videos
3. Select a video type (Feed, Reel, or Story)
4. Fill in the form and upload a test video
5. Check your GCS bucket to verify the video was uploaded

## Troubleshooting

### Error: "GCS storage not initialized"
- Check that `GCS_PROJECT_ID` and `GCS_CREDENTIALS` are set correctly in Vercel
- Make sure the JSON credentials are properly formatted (single-line, escaped)

### Error: "Permission denied"
- Verify your service account has Storage Admin or Storage Object Admin role
- Check that the bucket name matches exactly: `video_loader`

### Error: "Bucket not found"
- Ensure the bucket `video_loader` exists in your GCP project
- Verify the project ID matches your `GCS_PROJECT_ID` environment variable

### Videos not appearing publicly
- The API makes files public by default. If you need private files, modify the `makePublic()` call in `api/upload-video.js`
- Check bucket permissions and CORS settings if accessing from a browser

## Security Considerations

1. **Never commit** your service account JSON key to git
2. Keep your `GCS_CREDENTIALS` environment variable secure
3. Consider using more restrictive IAM roles (Storage Object Admin instead of Storage Admin)
4. Set up CORS policies on your bucket if needed
5. Consider adding authentication to your API endpoint

## API Endpoint

The upload endpoint is available at:
- Production: `https://your-domain.vercel.app/api/upload-video`
- Development: `http://localhost:3000/api/upload-video` (if running locally)

## File Structure

Uploaded videos will be stored in your GCS bucket as:
```
video_loader/
  ├── feed/
  │   └── [uuid].mp4
  ├── reel/
  │   └── [uuid].mp4
  └── story/
      └── [uuid].mp4
```

Each file includes metadata:
- Company name
- Company ID (if provided)
- Caption
- Original filename
- Upload timestamp

