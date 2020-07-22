const mongoose = require('mongoose');
const config = require('config');

/* Connect to the MongoDB database */
const state = {
    db: null
};
  
async function connect() {
    if (state.db) return;
    let url = '';
  
    /** Check if mongodb is running in a cluster and generate the connection url accordingly */
    if (config.has('db.isCluster') && config.get('db.isCluster') ) {
        url =
              'mongodb+srv://' +
              config.get('db.username') +
              ':' +
              config.get('db.password') +
              '@' +
              config.get('db.host') +
              '/' +
              config.get('db.name') +
              '?retryWrites=true&w=majority';
    } else {
        url = 'mongodb://' + config.get('db.host') + ':' + config.get('db.port') + '/' + config.get('db.name');
    }
    
    let db = await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    console.log('DB Connection Success');
    state.db = db;
}
  
// exports.get = function() {
//     return state.db;
// };
  
function close() {
    if (state.db && mongoose) {
  
        mongoose.connection.close(function(err) {
            if (err) {
                console.log(`Mongoose connection close err ${err}`);
                return;
            }
            state.db = null;
            state.mode = null;
            console.log('Mongoose connection closed  succesfully');
        });
    }
}

async function init() {
    await connect();
}

async function shutdown() {
    await close();
}

module.exports = {
    init: init,
    shutdown: shutdown
};