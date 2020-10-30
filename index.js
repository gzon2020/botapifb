var express=require("express")
, request=require("request")
, bodyParser=require("body-parser")
, app=express();

app.listen(3000);

app.get("/webhook",function(req,res){

    res.send("hi");

});
