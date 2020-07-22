const mongoose = require('mongoose');

exports.publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});