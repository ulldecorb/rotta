const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  mailto: String,
  img: String,
  admin: Boolean,
  projectsAffiliation: {
    projectName: String,
    wishList: [
      { _id: String },
    ],
  },
});

module.exports = mongoose.model('user', userSchema);
