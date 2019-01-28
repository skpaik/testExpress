var express = require('express');
var router = express.Router();
var modelControl = require('./../modules/bll/student');


/* GET student listing. */
router.get('/', function (req, res, next) {

    modelControl.list(req, function (data) {
        console.log(data);
        res.send(data);
    });
});

router.get('/create', function (req, res, next) {

    res.send('Get respond with a  create resource of Student');

    modelControl.add(req, function (res_json) {
        //res_json.api = "R_44_001_a";
        //res.json(res_json);
    });
});

router.post('/create', function (req, res, next) {

    res.send('Post respond with a  create resource of Student');

    modelControl.add(req, function (res_json) {
        //res_json.api = "R_44_001_a";
        //res.json(res_json);
    });
});

module.exports = router;