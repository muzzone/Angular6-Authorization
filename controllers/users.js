const User = require('../models/Users');

// GET http://localhost:8080/api/users
module.exports.users = async function (req, res) {
  try {
    const users = await User.find({}, {_id: 1, email: 1, name: 1});
    res.send(users);
  } catch (e) {
    console.log('get users error', e);
    res.send(null)
  }
};

// GET http://localhost:8080/api/users/user?id=1
module.exports.getById = async function (req, res) {
  const user = await User.findOne({_id: req.query.id}, {_id: 1, email: 1, name: 1});
  res.send(user);
};


// DELETE http://localhost:8080/api/users/delete/12
module.exports.delete = async function (req, res) {
  const response = await User.deleteOne({_id: req.params.id});
  res.send(response);
};