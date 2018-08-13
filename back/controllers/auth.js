const User = require('../models/Users');

module.exports.login = function (req, res) {
  res.send('login work');
};

// localhost:8080/api/register
// post
// body: {
// 	"email": 1,
// 	"login": 2,
// 	"pass": 3
// }
module.exports.register = function (req, res) {
  const data = {
    email: req.body.email,
    login : req.body.login,
    pass : req.body.pass
  };
  const user = new User({
    email: req.body.email,
    login : req.body.login,
    pass : req.body.pass
  });
  user.save()
    .then(() => {console.log('user created')});
  res.send(req.body);
};