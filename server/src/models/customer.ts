import Sequelize = require("sequelize");

import sequelize from "../util/db";

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  website: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

export default Customer;
