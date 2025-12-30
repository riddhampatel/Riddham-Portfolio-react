/**
 * Logging Middleware
 * Request logging
 */
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  console.log(`[${timestamp}] ${method} ${path} - ${ip}`);

  // Track response
  res.on('finish', () => {
    const responseTime = Date.now() - req.startTime;
    console.log(`[${timestamp}] ${method} ${path} - ${res.statusCode} (${responseTime}ms)`);
  });

  req.startTime = Date.now();
  next();
};

export default requestLogger;
