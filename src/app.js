const compression = require('compression');
const { config } = require('dotenv');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');
const swaggerDoc = require('../docs/swagger-doc.json');

config();

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/v1', router);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/api/v1', (request, response) =>
  response.status(200).json({
    status: 'success',
    message: 'welcome to "Image Repository API v1"',
  }),
);

app.all('*', (request, response) =>
  response.status(404).json({
    status: 'error',
    error: 'resource not found',
  }),
);

app.use(errorHandler);

module.exports = app;
