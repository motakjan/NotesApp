import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morganMiddleware from './utils/loggers/morgan.logger';
import logger from './utils/loggers/winston.logger';
import { connectToDatabase, disconnectFromDatabase } from './utils/database';
// Model Routes
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';
import todoRoute from './routes/todo.routes';
// Middleware imports
import verify from './middlewares/verifyToken';

const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(helmet());
app.use(morganMiddleware);
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/todo', verify, todoRoute);
app.use('/api/user', verify, userRoute);

const server = app.listen(1337, async () => {
  logger.info('Backend server is running!');
  await connectToDatabase();
});

const signals = ['SIGTERM', 'SIGINT'];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    logger.info('Exiting server');

    server.close();

    await disconnectFromDatabase();
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
