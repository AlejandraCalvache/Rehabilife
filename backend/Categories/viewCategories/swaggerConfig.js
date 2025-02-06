const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Categories Listing Service',
      version: '1.0.0',
      description: 'API para listar categorías de productos',
    },
    servers: [
      {
        url: 'http://localhost:4002',
      },
    ],
  },
  apis: ['./routes/categoriesRoutes.js'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
