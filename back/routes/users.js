const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.users);

router.get('/user', users.getById);

router.delete('/delete/:id', users.delete);

module.exports = router;