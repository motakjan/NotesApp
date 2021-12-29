import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morganMiddleware from './utils/loggers/morgan.logger';
import logger from './utils/loggers/winston.logger';
import connect from './utils/connect';

// App starting point
const app = express();

// Model Routes
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';
import postRoute from './routes/post.routes';

// Middleware imports
import verify from './middlewares/verifyToken';

dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morganMiddleware);
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', verify as any, userRoute);
app.use('/api/posts', verify as any, postRoute);

app.listen(1337, async () => {
    logger.info('Backend server is running!');
    await connect();
});
