const express = require('express');
const bodyParser = require('body-parser');
const soap = require('soap');
const cors = require('cors');
const paymentService = require('./services/paymentService');
const wsdl = require('./services/paymentWsdl');

const app = express();
const port = 3016;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice SOAP Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Microservice SOAP listening at http://localhost:${port}`);
  const wsdlPath = '/wsdl';
  soap.listen(app, wsdlPath, paymentService, wsdl);
  console.log(`WSDL available at http://localhost:${port}${wsdlPath}?wsdl`);
});
