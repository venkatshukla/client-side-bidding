const fs = require('fs');
const path = require('path');

const filesOriginalName = fs.readdirSync(path.resolve(__dirname, './models'));

async function initialiseModels(app) {
    app.locals.models = app.locals.models || {};
    filesOriginalName.forEach((model) => { 
        app.locals.models[model.replace('.js', '')] = require('./models/' + `${model.replace('.js', '')}`);
    });
    
    console.log('Mongoose Models loaded Successfully');
}

module.exports = initialiseModels;
