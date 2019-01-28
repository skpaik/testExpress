/**
 * Created by sudipto on 11/04/16.
 */

var ModelService = require('./../services/student');

var func_add = function (req, callback) {

    var callbackAddAccount = function (err_model, model) {

        console.log(err_model);
        console.log(model);

        if (err_model) {

            var response_text = {
                status: 500,
                m: 'error',
                data: "Error occurred."
            };

            return callback(response_text);

        } else if (model) {

            var response_text = {
                status: 200,
                m: 'Success',
                data: "Model Added Successfully."
            };

            return callback(response_text);
        }
    };

    var req_body = req.body;//Post Request
    //var req_body = req.query;//Get Request

    console.log(req_body);

    var posted_data_for_model = {
        full_name: req_body.full_name,
        mobile_number: req_body.mobile_number,
        address: req_body.address,
        email: req_body.email
    };
    console.log(posted_data_for_model);
    ModelService.Add(posted_data_for_model, callbackAddAccount);
};

var func_list = function (req, callback) {

    var callbackFindModels = function (err_user, models) {

        if (err_user) {
            var response_text = {
                status:500,
                m: 'An Internal Error occurred',
                data: [{}]
            };

            return callback(response_text);

        } else if (models && models.length) {

            var response_text = {
                status: 200,
                m: 'list',
                data: models
            };

            return callback(response_text);
        }
        else {
            var response_text = {
                status: 404,
                m: 'Empty List',
                data: [{}]
            };

            return callback(response_text);
        }
    };

    var posted_data_for_user = {};

    ModelService.find_all(posted_data_for_user, callbackFindModels);
};

module.exports = {
    add: func_add,
    list: func_list,
};