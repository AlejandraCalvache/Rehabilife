
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Categories API',
      version: '1.0.0',
      description: 'API update categories',
    },
    servers: [
      {
        url: 'http://localhost:4003/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
