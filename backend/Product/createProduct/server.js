const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const productsRoutes = require('./routes/productsRoutes');
const cors = require('cors');

const app = express();
const port = 3006;

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api', productsRoutes);
app.use('/swaggerCreateProduct', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => res.json({ status: 'ok', message: 'Microservice Running' }));

app.listen(port, () => {
  console.log(`Products service listening at http://localhost:${port}`);
});
