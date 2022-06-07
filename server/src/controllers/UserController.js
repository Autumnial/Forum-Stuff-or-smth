const { User } = require("../models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create({
        username: req.body.name,
        email: req.body.email,
        password: req.body.pass,
      });
      console.log(user);

      res.send({ status: 200 });
    } catch (err) {
      res.send({
        status: 400,
        error: {
          type: "insert",
          message: err.errors[0].message,
        },
      });
    }
  },

  async getUsers(req, res) {
    const users = await User.findAll();
    res.send({
      status: 200,
      users: users,
    });
  },


  async setAdmin(req, res) {
    try{
      const user = await User.update({ level: req.body.level }, {
        where: {
          username: req.body.name
        }
      })

      res.send({status: 200, user: user})
    } catch(err){
      res.send({status: 400, error: err})
    }
    
  },

  async login(req, res) {
    const user = await User.findOne({
      // attributes: ["username"],
      where: {
        [Op.or]: [{ username: req.body.name }, { email: req.body.name }],
      },
    });

    if (!user) {
      res.send({ status: 404 });
      return;
    }
    const passValid = await user.comparePassword(req.body.pass)
    if (passValid) {
      res.send({
        status: 200,
        user: user,
      });
    } else {
      res.send({
        status: 401,
      });
    }

  },
};
