import morgan, { StreamOptions } from 'morgan';

import logger from './winston.logger';

const stream: StreamOptions = {
  // Use the http severity
  write: message => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

// Build the morgan middleware
const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', { stream, skip });

export default morganMiddleware;
