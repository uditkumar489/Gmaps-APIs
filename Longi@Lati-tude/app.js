var express = require("express");
var request = require("request");
var app = express();

app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.render("index");
});

app.get("/results",function(req,res){

    var what = req.query.loca;
    res.render("list" , {what : what});
    console.log(what);
    hello();
});

app.listen(3000, function(){
    console.log("express server is up on port 3000");
  });

function hello()
{
    console.log("hello0");
    
}
/* key=AIzaSyBihCjqO0O6Q-vfAMgTKCC-XzYYd5X5BeA */