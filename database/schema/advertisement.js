const mongoose = require('mongoose');

exports.advertisementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    campaignName: String,
    advertiserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'advertiser',
        index: true
    },
    CPI: {
        amount: {
            type: Number
        },
        currency: {
            type: String,
            enum: ['USD','INR']
        }
    },
    content: {
        type: String,
        required: true
    }
});