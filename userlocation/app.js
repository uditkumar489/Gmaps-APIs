var express = require("express");
var request = require("request");
var app = express();

app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.render("index");
});

app.listen(3000, function(){
    console.log("express server is up on port 3000");
  });