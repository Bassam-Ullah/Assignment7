import Sequelize = require("sequelize");

import sequelize from "../util/db";

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  middleName: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default User;
