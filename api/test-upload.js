// Simple test endpoint to verify API is working
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  return res.status(200).json({
    success: true,
    message: 'API endpoint is working',
    method: req.method,
    hasBody: !!req.body,
    headers: {
      'content-type': req.headers['content-type'],
    }
  });
}

