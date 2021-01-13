const { config } = require('dotenv');
const http = require('http');
const app = require('./app');
const logger = require('./config/logger');

config();

const PORT = process.env.NODE_ENV === 'test' ? 6378 : process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => logger.info(`server running on http://localhost:${PORT}`));
