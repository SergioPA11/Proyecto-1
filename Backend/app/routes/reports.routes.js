module.exports = app => {
    var router = require("express").Router();
    var request = require("request"); 

    router.get('/', function (req, res, next){
        var data = {
            template:{'shortid':'q34ntloIm7'},
            options:{
                preview:true
            }
        }
        var options = {
            url: 'http://localhost:5488/api/report',
            method: 'POST',
            json: data
        }
        request(options).pipe(res);
    });
    app.use('/api/inform', router);
}