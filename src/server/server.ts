import express from 'express';
import echo from './controllers/echo';
import logger from './utils/logger';

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static('dist'));

server.get('/echo', echo);

server.listen(port);
logger.info(`Server listening at http://localhost:${port}`);
