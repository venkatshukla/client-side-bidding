const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;


const { advertisementSchema } = require('../schema/advertisement');

const schema = new mongoose.Schema(
    advertisementSchema,  
    { 
        timestamps: true, 
        toJSON: { virtuals: true }, 
        toObject: { virtuals: true } 
    } 
);


schema.set('collection', 'advertisements');


module.exports = mongoose.model('advertisement', schema);
