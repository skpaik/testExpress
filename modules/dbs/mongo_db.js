var configs = require('./dbconfig');
var mongoose = require('mongoose');

require('./modelStudent');

mongoose.connect('mongodb://' + configs.mongo_host + '/' + configs.db_name);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

    console.log('Mongo Connection Open on ' + configs.db_name +" database");
});