
class Publisher{
    constructor(app){
        this.publisherModel = app.locals.models.publisher; 
    }
}
module.exports = (app) => {
    if (!app.locals.services.publisher) {  
        //Create Singleton and export
        app.locals.services.publisher = new Publisher(app);
    }
    return app.locals.services.publisher;
};