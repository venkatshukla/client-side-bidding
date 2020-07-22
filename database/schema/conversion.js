const mongoose = require('mongoose');

exports.conversionSchema = new mongoose.Schema({
    publisherId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    advertisementId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'advertisement',
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    audienceDetails:{

    }
});