const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const keys = require('../config/keys');

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.pass.toString(), candidate.pass.toString());
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        name: candidate.name,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60});
      res.send({
        user: candidate,
        token: `Bearer ${token}`
      });
    } else {
      res.status(401).json({
        message: 'wrong password'
      })
    }
  } else {
    res.status(404).json({
      message: 'Email not found'
    })
  }
};

// localhost:8080/api/register
// post
// body: {
// 	"email": 1,
// 	"name": 2,
// 	"pass": 3
// }
module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});
  console.log('request body', req.body);

  if (candidate) {
    res.status(409).json({
      message: 'Email already used'
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.pass;
    const user = new User({
      email: req.body.email,
      name : req.body.name,
      pass : bcrypt.hashSync(pass, salt)
    });
    user.save()
      .then((savedUser) => {
        const token = jwt.sign(
          {
            email: savedUser.email,
            name: savedUser.name,
            userId: savedUser._id
          },
          keys.jwt, {expiresIn: 60 * 60}
        );
        console.log('saved user', savedUser);
        res.status(200).json({user: savedUser, token: `Bearer ${token}`});
      })
      .catch(e => {console.log('create user err', e)});
  }
};