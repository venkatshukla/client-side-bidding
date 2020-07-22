
const SERVICE_REGISTER = [
    {
        name: 'advertisement',
        folderName: 'advertisement'
    }
];
      
async function initializeServices(app) {
    if (!app.locals.services) {
        app.locals.services = {};
    }
        
    SERVICE_REGISTER.forEach( service => {
        require(`./${service.folderName}`)(app);  
    });

    console.log('Services Initialized Successfully');
}
      
module.exports = initializeServices;
      