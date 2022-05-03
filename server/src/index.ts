import { connectToDatabase, disconnectFromDatabase } from './utils/database';

import authRoute from './routes/auth.routes';
import cors from 'cors';
import dashboardRoute from './routes/dashboard.routes';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import logger from './utils/loggers/winston.logger';
import morganMiddleware from './utils/loggers/morgan.logger';
import taskRoute from './routes/task.routes';
import userRoute from './routes/user.routes';
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
app.use('/api/task', verify, taskRoute);
app.use('/api/user', verify, userRoute);
app.use('/api/dashboard', verify, dashboardRoute);

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

for (let i = 0; i < signals.length; i += 1) {
  gracefulShutdown(signals[i]);
}
