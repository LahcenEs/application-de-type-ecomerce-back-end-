const express = require('express');
const { check } = require('express-validator');
const passwordController = require('../controllers/passwordController');

const router = express.Router();

router.post('/reset-password', [
    check('email', 'Please include a valid email').isEmail()
], passwordController.resetPassword);

router.get('/reset/:token', passwordController.resetPasswordToken);

router.post('/update-password', [
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], passwordController.updatePassword);

module.exports = router;