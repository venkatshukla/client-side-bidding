const express = require('express');
const routes= require('./routes');
const database = require('./boot/db');
const HttpServer = require('./boot/http-server');
const model = require('./database');
const services = require('./services');

let app = express();

async function start(){
    /* Setup DB */
    await database.init(app);
   
    await model(app);
    
    await services(app);

    /* Start Server */
    await HttpServer.init(app);

    /* Loading all Routes */
    routes.init(app);

    console.log('Client-side-bidder application start success');
}

start();

