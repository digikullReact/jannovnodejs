const express=require("express");
const app=express();

app.use(express.json());

app.get("/",function(req,res){
    //Writing soem logic 

    res.status(200).send("All good");

})

//text response

app.get("/text",function(req,res){
    //Writing soem logic 

    res.status(200).send("All good Here");

})


// json response

app.get("/json",function(req,res){
    //Writing soem logic 

    res.status(200).json({
        message:"Success"
    })

})
//POSt api 

app.post("/post",function(req,res){
    const value=req.body.value;

    res.status(200).json({
        message:"Success",
        data:parseInt(value)*2
    })

})


module.exports=app;