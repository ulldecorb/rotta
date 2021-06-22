const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: String,
  icon: String,
  creator: {
    user: String,
    date: String,
  },
  crew: [{
    user: String,
    mail: String,
    img: String,
  }],
});

module.exports = mongoose.model('project', projectSchema);
