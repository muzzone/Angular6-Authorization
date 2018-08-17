const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false}), users.users);

router.get('/user', users.getById);

router.delete('/delete/:id', users.delete);

module.exports = router;