const express = require(express);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model");

const router = express.Router()

//create user
router.post("/register", async (req, res, next) => {
    try {
        if(!(user.username && user.password)) {
            res.status(400).json({
              message: "Please complete required fields"
            })
          } else {
            const hash = bcrypt.hashSync(user.password, 10);
            user.password = hash;
        
            Users.add(user)
              .then(user => {
                delete user.password
                res.status(201).json(user);
              })
              .catch(err => {
                res.status(500).json({
                  message: "Error creating user"
                })
              })
          }
    } catch (err) {
        next(err);
    }
})

//login
router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findUser({ username });

        if(!(username && password)) {
            res.status(400).json({
              message: "Missing username and/or password"
            })
          } else {
            Users.findUser({ username })
              .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                  const token = generateToken(user);
        
                  res.status(200).json({
                    message: `Welcome, ${user.username}!`, token
                  })
                } else {
                  res.status(403).json({
                    message: "Login credentials incorrect"
                  })
                }
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  message: "Error retrieving login data"
                })
              })
          }
    } catch (err) {
        next(err);
    }
})

//create token
function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    }
    const options = {
      expiresIn: "1h"
    };
    return jwt.sign(payload, secrets.jwtSecret,options)
  }

module.exports = Router;