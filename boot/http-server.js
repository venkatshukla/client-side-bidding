
const http = require('http');
const pino = require('pino-http')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');

const { handleError } = require('../helpers/error');

const SERVER_CONF = config.get('server');

let server;
function setupServer(app){

    server = http.createServer(app);

    /* Centralized logging middleware */
    app.use(pino);

    /* Body Parser middleware */
    app.use(
        bodyParser.urlencoded({ extended: false })
    );
    app.use(bodyParser.json());

    /* Check CORS before proceeding further */
    // app.use(
    //     cors({
    //         origin: function (origin, callback) {
    //             if (
    //                 SERVER_CONF['cors-whitelist'].indexOf(origin) !== -1 
    //                 || 
    //                 SERVER_CONF['cors-allow-local']
    //             ) {
    //             // error - null, allowOrigin - true
    //                 callback(null, true);
    //             } else {
    //                 app.use(function (err, req, res) {
    //                     res.status(403).json({
    //                         success: false,
    //                         statusCode: 'NOT_ALLOWED_BY_CORS',
    //                         message: 'You are not allowed to access this resource',
    //                         data: {},
    //                     });
    //                 });
    //                 // error - true, allowOrigin - false
    //                 callback(true, false);
    //             }
    //         },
    //     })
    // );

    /* Helmet middleware for secure headers */
    app.use(helmet());

    /* Centralized Error Handler */
    app.use((err, req, next, res) => {
        handleError(err, res);
    });
    
    /* Health End point */
    app.get('/health', (req, res) => {
        return res.status(200).json({
            status: 'Up!'
        });
    });


    server.listen(config.get('server.port'));
    console.log('Server Listening on port ' + config.get('server.port'));
}

function shutdown() {
    //TODO: Implement this
    if(!server){
        console.log('Server not initialized! Nothing to shutdown');
        return;
    }
    server.close(() => {});
    console.log('HTTP Server shutdown success!');
}

module.exports = {
    init: setupServer,
    shutdown
};