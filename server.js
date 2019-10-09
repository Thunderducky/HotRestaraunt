var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

var reserved = [];
var waiting = [];

app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

//  GET / -> index.html = Here's some info about the restraunt
//  GET /reservation -> reservation.html
//  GET /tables -> tables


app.listen(PORT, function(){
    console.log("listening on port 3000")
})