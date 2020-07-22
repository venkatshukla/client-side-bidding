const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;


const { conversionSchema } = require('../schema/conversion');

const schema = new mongoose.Schema(
    conversionSchema,  
    { 
        timestamps: true, 
        toJSON: { virtuals: true }, 
        toObject: { virtuals: true } 
    } 
);



//schema.statics = require('');

schema.set('collection', 'conversions');

module.exports = mongoose.model('conversion', schema);
