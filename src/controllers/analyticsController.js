const Url = require('../models/Url');

const analyticsController = {
  getUrlAnalytics: async (req, res) => {
    const { alias } = req.params;
    const url = await Url.findOne({ alias });

    if (url) {
      const analytics = {
        totalClicks: url.clicks,
        // Add more analytics data as needed
      };
      return res.json(analytics);
    }

    res.status(404).json({ error: 'URL not found' });
  },

  getTopicAnalytics: async (req, res) => {
    const { topic } = req.params;
    const urls = await Url.find({ topic });

    const analytics = {
      totalClicks: urls.reduce((sum, url) => sum + url.clicks, 0),
      urls: urls.map(url => ({
        shortUrl: url.shortUrl,
        totalClicks: url.clicks,
      })),
      // Add more analytics data as needed
    };

    res.json(analytics);
  },

  getOverallAnalytics: async (req, res) => {
    const urls = await Url.find();

    const analytics = {
      totalUrls: urls.length,
      totalClicks: urls.reduce((sum, url) => sum + url.clicks, 0),
      // Add more analytics data as needed
    };

    res.json(analytics);
  },
};

module.exports = analyticsController;
