const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/protected-route', authMiddleware, (req, res) => {
    res.json({ msg: 'This is a protected route' });
});

module.exports = router;