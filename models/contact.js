const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    emailAdress: {
        type: String,
        required: true,
    },
    phoneContact: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Contact', contactSchema);


