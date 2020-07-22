const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;


const { publisherSchema } = require('../schema/publisher');

const schema = new mongoose.Schema(
    publisherSchema,  
    { 
        timestamps: true, 
        toJSON: { virtuals: true }, 
        toObject: { virtuals: true } 
    } 
);


schema.set('collection', 'publishers');

module.exports = mongoose.model('publisher', schema);
