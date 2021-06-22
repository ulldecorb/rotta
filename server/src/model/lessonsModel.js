const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  project: String,
  theme: String,
  title: String,
  icon: String,
  description: String,
  creator: {
    user: String,
    date: String
  },
  links: [{
    name: String,
    url: String,
    creator: {
      user: String,
      date: String
    }
  }]
});

module.exports = mongoose.model('Lessons', lessonSchema);
