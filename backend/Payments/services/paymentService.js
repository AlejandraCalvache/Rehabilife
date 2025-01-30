const Payment = require('../models/paymentModel');

const service = {
  PaymentService: {
    PaymentServiceSoapPort: {
        listPayment: async (args, callback) => {
            try {
              const result = await Payment.findAll();
              const payments = result.rows.map(payment => ({
                id: payment.id,
                nombre: payment.nombre,
                descripcion: payment.descripcion
              }));
              callback(null, { paymentList: payments });
            } catch (err) {
              callback({ faultstring: err.message });
            }
          }          
    }
  }
};

module.exports = service;
