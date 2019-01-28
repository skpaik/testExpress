/**
 * Created by sudipto on 11/04/16.
 */
var dbConfig = require('../dbs/dbconfig');
var model = dbConfig.get_model(dbConfig.table_Student);

module.exports = {

    Add: function (posted_data, callback_func) {

        model(posted_data).save(callback_func);
    },
    Update: function (posted_data, callback_func) {

        model.findOne({
            _id: posted_data.id
        }, function (err, account) {
            if (err) {
                callback_func(err);
            }
            else if (account) {
                account.password = posted_data.new_password;
                account.save(callback_func);
            }
            else {
                callback_func("Model Not Found");
            }
        });
    },
    find_one: function (posted_data, callback_func) {

        model.findOne(posted_data, callback_func)
    },
    find_all: function (posted_data, callback_func) {

        var query = model.find(posted_data);
        query.exec(callback_func);
    }
};