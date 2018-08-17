const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const keys = require('../config/keys');

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    if (candidate.pass.toString() === req.body.pass.toString()) {
      const token = jwt.sign({
        email: candidate.email,
        name: candidate.name,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60});
      res.send({token: `Bearer ${token}`});
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
  console.log('requset body', req.body);

  if (candidate) {
    res.status(409).json({
      message: 'Email already used'
    })
  } else {
    const user = new User({
      email: req.body.email,
      name : req.body.name,
      pass : req.body.pass
    });
    try {
      const savedUser = await user.save();
      res.status(200).json(savedUser);
    } catch (e) {console.log('create user err', e)}
  }
};