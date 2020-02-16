const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Contact', contactSchema);


