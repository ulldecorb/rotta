const mongoose = require('mongoose');

const themeSchema = mongoose.Schema({
  project: String,
  title: String,
  icon: String,
  creator: {
    user: String,
    date: String,
  },
});

module.exports = mongoose.model('theme', themeSchema);
