module.exports.users = function (req, res) {
  res.send('users')
};

// http://localhost:8080/api/users/user?id=1
module.exports.getById = function (req, res) {
  res.send('get user by id = ' + req.query.id);
};


// localhost:8080/api/users/delete/12
module.exports.delete = function (req, res) {
  res.send('delete user by id = ' + req.params.id);
};