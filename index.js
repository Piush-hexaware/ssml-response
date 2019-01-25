"use strict";
var request = require('request');
var express = require('express');

var bodyParser = require('body-parser');

var app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var server = require('http').createServer(app);

app.get('/', function(req, res){
    res.send("Hello world!");
 });

app.post('/add',function(req,res) {
    console.log("received a post request");
    if(!req.body) return res.sendStatus(400)
    res.setHeader('Content-Type','application/json');
    console.log('here is the post request from dialogflow');
    console.log(req.body);
    console.log("data from the webhook are" + req.body.result.parameters.first_number);
})
app.listen(process.env.PORT || 7000, function() {
    console.log("Server up and listening");
  });