const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const categoryRoutes = require('./routes/categoryRoutes');
const cors = require('cors');

const app = express();
const port = 4004;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use('/api', categoryRoutes);
app.use('/swaggerDeleteCategory', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice delete categories listening at http://localhost:${port}`);
});
