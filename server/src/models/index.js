const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const sequelize = new Sequelize("postgresql://celeste:SiaisyrKUJQaZXuh1WDuZA@free-tier5.gcp-europe-west1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dforuming-4054")

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize)
    // console.log(model)
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = sequelize;

module.exports = db;
