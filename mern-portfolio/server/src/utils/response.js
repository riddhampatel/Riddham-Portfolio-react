/**
 * Response Utility
 * Standardized API response format
 */
export const sendResponse = (res, status = 200, success = true, message = '', data = null) => {
  return res.status(status).json({
    success,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Error Response
 */
export const sendError = (res, status = 500, message = 'Internal Server Error', errors = null) => {
  return res.status(status).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
};

export default { sendResponse, sendError };
