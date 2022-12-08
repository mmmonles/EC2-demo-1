var express = require("express");
var bodyParser = require("body-parser");
const axios = require('axios');
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

app.get('/test',function(req,res){
   console.log('test');
   res.status(200).send('success') 
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 axios
  .get("https://webhook.site/6d64fd3d-8528-4c6f-a46a-af3842bf1dd1")
  .then(function (response) {
    console.log(response);
  });