const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;


const { advertiserSchema } = require('../schema/advertiser');

const schema = new mongoose.Schema(
    advertiserSchema,  
    { 
        timestamps: true, 
        toJSON: { virtuals: true }, 
        toObject: { virtuals: true } 
    } 
);

schema.set('collection', 'advertisers');


module.exports = mongoose.model('advertiser', schema);
