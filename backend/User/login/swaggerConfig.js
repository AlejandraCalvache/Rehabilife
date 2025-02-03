const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rehabilife API',
      version: '1.0.0',
      description: 'API RESTful fisio'
    },
    servers: [
      {
        url: 'http://localhost:3001/api'
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
