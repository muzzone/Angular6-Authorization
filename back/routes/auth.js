const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/', function(req, res, next) {
  res.send('main route');
});

router.post('/login', auth.login);
router.post('/register', auth.register);

module.exports = router;
