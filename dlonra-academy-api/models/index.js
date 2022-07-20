const config = require('../app/config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    logging: true,
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tuser = require('./tusers.model')(sequelize, Sequelize);

module.exports = db;