const express = require('express');
const pino = require('pino-http')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes= require('./routes');
const config = require('config');

const { handleError } = require('./helpers/error');

let app = express();

const SERVER_CONF = config.get('server');

/* Centralized logging middleware */
app.use(pino);

/* Body Parser middleware */
app.use(
    bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

/* Check CORS before proceeding further */
app.use(
    cors({
        origin: function (origin, callback) {
            if (
                SERVER_CONF['cors-whitelist'].indexOf(origin) !== -1 
            || 
          SERVER_CONF['cors-allow-local']
            ) {
                // error - null, allowOrigin - true
                callback(null, true);
            } else {
                app.use(function (err, req, res) {
                    res.status(403).json({
                        success: false,
                        statusCode: 'NOT_ALLOWED_BY_CORS',
                        message: 'You are not allowed to access this resource',
                        data: {},
                    });
                });
                // error - true, allowOrigin - false
                callback(true, false);
            }
        },
    })
);

/* Helmet middleware for secure headers */
app.use(helmet());

/* Health End point */
app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'Up!'
    });
});

/* Loading all Routes */
routes.init(app);

/* Centralized Error Handler */
app.use((err, req, res) => {
    handleError(err, res);
});

app.listen(SERVER_CONF.port);

console.log('Server start success');
