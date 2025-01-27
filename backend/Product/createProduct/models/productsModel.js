const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.STRING,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  mark: DataTypes.STRING,
  advert: DataTypes.STRING,
  image_url: DataTypes.STRING
}, {
  tableName: 'products_inf',
  timestamps: false
});

module.exports = Product;
