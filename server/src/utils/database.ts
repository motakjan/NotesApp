import logger from './loggers/winston.logger';

const mongoose = require('mongoose');

const DB_CONNECTION_STRING =
  process.env.MONGO_URL || "mongodb://localhost:27017/notes-app";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING, () => {
      logger.info('🚀 Connected to MongoDB 🚀');
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  await mongoose.connection.close();
  logger.info("Disconnected from database");
  
}


