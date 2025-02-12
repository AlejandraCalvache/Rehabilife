const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const categoriesRoutes = require('./routes/categoriesRoutes');  
const cors = require('cors');

const app = express();
const port = 4002;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use('/api', categoriesRoutes); 
app.use('/swaggerViewCategories', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list categories listening at http://localhost:${port}`);
  console.log(`http://localhost:${port}/swaggerViewCategories`);
});