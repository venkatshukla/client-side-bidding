
class Advertiser{
    constructor(app){
        this.advertiserModel = app.locals.models.advertiser; 
    }
}
module.exports = (app) => {
    if (!app.locals.services.advertiser) {  
        //Create Singleton and export
        app.locals.services.advertiser = new Advertiser(app);
    }
    return app.locals.services.advertiser;
};