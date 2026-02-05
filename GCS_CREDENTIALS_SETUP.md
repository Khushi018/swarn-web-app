# GCS Credentials Setup

## Local Development

For local development, you can use the credentials JSON file directly:

1. Place your GCS credentials JSON file in the project root
2. Name it: `gen-lang-client-0665888431-038f11096cad.json` (or update the path in `api/upload-video.js`)
3. The API will automatically detect and use it

**Note:** The credentials file is already added to `.gitignore` to prevent accidental commits.

## Vercel Deployment

For Vercel deployment, use environment variables instead:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these variables:

### Option 1: Using Environment Variables (Recommended for Production)

```
GCS_PROJECT_ID=gen-lang-client-0665888431
GCS_CREDENTIALS={"type":"service_account","project_id":"gen-lang-client-0665888431",...}
```

**To get GCS_CREDENTIALS:**
- Copy the entire contents of your JSON credentials file
- Minify it (remove line breaks)
- Paste as the value for `GCS_CREDENTIALS`

You can use this command to format it:
```bash
cat gen-lang-client-0665888431-038f11096cad.json | jq -c
```

### Option 2: Using Vercel Secrets (Alternative)

If you prefer, you can store the credentials file as a Vercel secret and reference it.

## Priority Order

The API checks credentials in this order:
1. **Environment variables** (`GCS_PROJECT_ID` + `GCS_CREDENTIALS`) - Used in Vercel
2. **Local JSON file** (`gen-lang-client-0665888431-038f11096cad.json`) - Used for local development

## Security Notes

⚠️ **IMPORTANT:**
- Never commit credentials files to git
- The `.gitignore` file already excludes `gen-lang-client-*.json` files
- Always use environment variables in production
- Rotate credentials if they're accidentally exposed

## Testing

To test locally:
```bash
npm run dev
# Or with Vercel CLI:
vercel dev
```

The API will automatically use the local credentials file if environment variables are not set.

