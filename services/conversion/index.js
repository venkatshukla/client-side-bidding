
class Conversion{
    constructor(app){
        this.conversionModel = app.locals.models.conversion; 
    }
}
module.exports = (app) => {
    if (!app.locals.services.conversion) {  
        //Create Singleton and export
        app.locals.services.conversion = new Conversion(app);
    }
    return app.locals.services.conversion;
};