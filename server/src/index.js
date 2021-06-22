const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 4545;
const projectsRouter = require('./routes/projects.route');
const themesRouter = require('./routes/themes.route');
const lessonsRouter = require('./routes/lessons.route');
const usersRouter = require('./routes/users.route');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/api/projects', projectsRouter);
server.use('/api/themes', themesRouter);
server.use('/api/lessons', lessonsRouter);
server.use('/api/users', usersRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.yellow(`localhost:${port}`)}`));
