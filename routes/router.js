var indexRouter = require('./index');
var usersRouter = require('./users');
var studentRouter = require('./student');

module.exports = function (app) {

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/students', studentRouter);
};