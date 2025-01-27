const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = 3004;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Login Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/swaggerRegister', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
