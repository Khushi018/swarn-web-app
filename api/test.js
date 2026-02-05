// Simple test to verify API endpoint is working
export default async function handler(req, res) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    return res.status(200).json({
      success: true,
      message: 'API is working',
      method: req.method,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  }
}

