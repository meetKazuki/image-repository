const { config } = require('dotenv');
const logger = require('../config/logger');

config();

/**
 * @function
 * @description a wrapper controller for error handling
 *
 * @param {Object} err error object
 * @param {Object} request express request object
 * @param {Object} response express response object
 * @param {Function} next callback to call next middleware
 *
 * @returns {Object} response from the server
 */
module.exports = (error, request, response, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  let errorMessage = {};

  if (response.headersSent) return next(error);

  // TODO: I'm too lazy to think at this moment, but please
  // revisit this block later🙏
  if (!isProduction) {
    logger.error(error.stack);
    errorMessage = error;
  }

  return response.status(error.statusCode || 500).json({
    status: 'error',
    error: {
      message: error.message,
      ...(error.errors && { errors: error.errors }),
      ...(!isProduction && { trace: errorMessage }),
    },
  });
};
