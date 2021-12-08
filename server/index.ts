const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// Model Routes
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Middleware import
const verify = require('./middlewares/verifyToken');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MongoDB');
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', verify, usersRoute);
app.use('/api/posts', verify, postsRoute);

app.listen(1337, () => {
    console.log('Backend server is running!');
});
