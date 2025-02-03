const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Product list service',
      version: '1.0.0',
      description: 'API',
    },
    servers: [
      {
        url: 'http://localhost:3008',
      },
    ],
  },
  apis: ['./routes/productsRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
