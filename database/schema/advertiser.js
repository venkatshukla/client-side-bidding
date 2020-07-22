const mongoose = require('mongoose');

exports.advertiserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});