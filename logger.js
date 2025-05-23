// logger.js
const logger = (req, res, next) => {
    const start = Date.now(); // timestamp when request is received
    const { method, url } = req;
    const timestamp = new Date().toISOString();
  
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);
    });
  
    next();
  };
  
  module.exports = logger;
  