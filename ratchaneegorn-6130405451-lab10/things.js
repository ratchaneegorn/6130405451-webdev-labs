var express = require('express');
// const { request } = require('http');
var router = express.Router();

var request1 = require("request")


router.get('/ip', function(req, res) {
    request1.get("http://httpbin.org/ip", (error, response, body) => {    // Calling API
    if (error) {
        return console.dir(error);
    }
    var result = JSON.parse(body);
    var ip = result.origin;
    res.send({ip});
});
    
});

router.post('/', function(req, res) {
    res.send("Test");
})
module.exports = router;