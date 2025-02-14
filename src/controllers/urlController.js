const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const urlController = {
  createShortUrl: async (req, res) => {
    const { longUrl, customAlias, topic } = req.body;
    const alias = customAlias || nanoid(6);
    const shortUrl = `https://google.com/${alias}`;

    const url = new Url({
      originalUrl: longUrl,
      shortUrl,
      alias,
      topic,
    });

    await url.save();
    res.json({ shortUrl, createdAt: url.createdAt });
  },

  redirectUrl: async (req, res) => {
    const { alias } = req.params;
    const url = await Url.findOne({ alias });

    if (url) {
      url.clicks += 1;
      await url.save();
      return res.redirect(url.originalUrl);
    }

    res.status(404).json({ error: 'URL not found' });
  },
};

module.exports = urlController;
