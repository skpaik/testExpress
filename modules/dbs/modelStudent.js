var configs = require('./dbconfig');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Student = new Schema({
    id: Schema.Types.ObjectId,
    full_name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    address: {type: String},
    email: {type: String},
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

mongoose.model(configs.table_Student, Student);