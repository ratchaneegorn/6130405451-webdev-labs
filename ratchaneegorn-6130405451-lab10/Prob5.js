//get the IP address of machine and then using Express to provide API 
//that shows the value of IP address at  http://localhost:3000/ip 
var express = require('express');
var app = express();

var things = require('./things.js')

app.use('/things', things);
app.listen(3000);
