const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Categories API',
      version: '1.0.0',
      description: 'API RESTful para gestionar categorías de productos'
    },
    servers: [
      {
        url: 'http://localhost:4001/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
