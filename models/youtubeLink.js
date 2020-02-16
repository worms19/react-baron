const mongoose = require('mongoose');

const { Schema } = mongoose;

const youtubeLinkSchema = new Schema({

  link: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model('YoutubeLink', youtubeLinkSchema);


