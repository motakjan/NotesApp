import logger from './loggers/winston.logger';
import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, () => {
      logger.info('🚀 Connected to MongoDB 🚀');
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  await mongoose.connection.close();
  logger.info('Disconnected from database');
};
