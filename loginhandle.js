//loggin Errors

const express = require('express');
const winston = require('winston');
const app = express();

// Setup Winston Logger
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Corrected filename typo
  ],
});

// Example route that throws an error
app.get('/', (req, res, next) => {
  throw new Error('something went wrong');
});

// Centralized error handling middleware
function errorHandler(err, req, res, next) {
  logger.error(err.message, { metadata: err.stack });
  res.status(500).json({ error: err.message });
}

app.use(errorHandler);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
