const express=require("express");
const router=express.Router();


router.get("/home",function(req,res){

    // you cant use the relative path in sending the html file //C\folder\folder
    console.log(__dirname);

    res.sendFile(__dirname+"/views/index.html");

    // task is to render from html folder ----

})

router.get("/pdf",function(req,res){

    // you cant use the relative path in sending the html file //C\folder\folder
    console.log(__dirname);

    res.sendFile(__dirname+"/views/go.pdf");

    // task is to render from html folder ----

})


module.exports=router;