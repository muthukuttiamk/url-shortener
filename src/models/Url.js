const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
  alias: String,
  topic: String,
  createdAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
});

module.exports = mongoose.model('Url', urlSchema);
