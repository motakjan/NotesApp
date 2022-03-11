import logger from './loggers/winston.logger';
const mongoose = require('mongoose');

const connect = async () => {	
  try {
    await mongoose.connect(process.env.MONGO_URL, () => {
      logger.info('Connected to MongoDB');
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default connect;