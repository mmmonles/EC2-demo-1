var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });