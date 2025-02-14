const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/:alias', analyticsController.getUrlAnalytics);
router.get('/topic/:topic', analyticsController.getTopicAnalytics);
router.get('/overall', analyticsController.getOverallAnalytics);

module.exports = router;
