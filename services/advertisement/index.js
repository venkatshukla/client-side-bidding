const mongoose = require('mongoose');

class Advertisement{
    constructor(app){
        this.advertisementModel = app.locals.models.advertisement; 
    }

    async createAdvertisement({data}){
        const createdAd = await this.advertisementModel.create(data);
        return createdAd;
    }

    async getAdvertisementByAdvertiserId({advertiser}){

        // fetching random ad using mongodb sample.
        const randomAd = await this.advertisementModel.aggregate([
            { $match: { advertiserId: mongoose.Types.ObjectId(advertiser) } },
            { $sample: { size: 1 } }
        ]).exec(); 

        return randomAd;
    }


}
module.exports = (app) => {
    if (!app.locals.services.advertisement) {  
        //Create Singleton and export
        app.locals.services.advertisement = new Advertisement(app);
    }
    return app.locals.services.advertisement;
};