import express = require("express");
import bodyParser from "body-parser";
import cors = require("cors");
import sequelize from "./util/db";
require("dotenv").config();

import userRouter from "./routes/user";
import roleRouter from "./routes/role";
import customerRouter from "./routes/customer";

import User from "./models/user";
import Customer from "./models/customer";
import Role from "./models/role";

// console.log(process.env);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/roles", roleRouter);
app.use("/customers", customerRouter);

User.belongsTo(Customer, {
  foreignKey: "cid",
});
User.belongsTo(Role, {
  foreignKey: "rid",
});

sequelize
  .sync()
  .then(() => {
    console.log("successful Connection");

    // app.listen(process.env.PORT);
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error :", err);
  });
