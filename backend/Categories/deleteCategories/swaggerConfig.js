const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Categories API',
      version: '1.0.0',
      description: 'API delete categories',
    },
    servers: [
      {
        url: 'http://localhost:4004/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
