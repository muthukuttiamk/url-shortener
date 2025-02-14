const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
const rateLimiter = require('../middlewares/rateLimiter');

router.post('/shorten', rateLimiter, urlController.createShortUrl);
router.get('/:alias', urlController.redirectUrl);

module.exports = router;
