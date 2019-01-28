var mongoose = require('mongoose');

var dbName = 'InterMongodb1';

var mongoHost = process.env.MONGO_IP || 'localhost';

var get_model = function (_model) {
    return mongoose.model(_model);
};

module.exports = {
    db_name: dbName,
    mongo_host: mongoHost,
    table_Student: 'Student',
    get_model: get_model
};