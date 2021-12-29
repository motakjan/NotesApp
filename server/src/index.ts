import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morganMiddleware from './utils/loggers/morgan.logger';
import logger from './utils/loggers/winston.logger';
import connect from './utils/connect';
// Model Routes
import userRoute from './routes/user.routes';
import authRoute from './routes/auth.routes';
import postRoute from './routes/post.routes';

// Middleware imports
import verify from './middlewares/verifyToken';

// App starting point
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morganMiddleware);
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', verify, userRoute);
app.use('/api/posts', verify, postRoute);

app.listen(3030, async () => {
    logger.info('Backend server is running!');
    await connect();
});
