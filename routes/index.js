const glob = require('glob');
const path = require('path');
const config = require('config');

function loadRoutes(app) {

    // eslint-disable-next-line no-undef
    glob.sync(`${__dirname}/${config.get('api-version')}/*.js`).forEach(function(file) {
        app.use('/' + config.get('api-version') + '/', require(path.resolve(file)));   
    });
 
    handle404Error(app);

}

function handle404Error(app) {
    app.use(function (req, res) {
        res.status(404).json({
            success: false,
            statusCode: 'END_POINT_NOT_FOUND',
            message: 'The requested end point does not exist',
        });
    });
}

module.exports = {
    init: loadRoutes,
};
