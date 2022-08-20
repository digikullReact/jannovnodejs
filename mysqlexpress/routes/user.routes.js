const express=require("express");
const router=express.Router();
const {insertIntoDb} =require("../db");


router.post("/",function(req,res){

    insertIntoDb().then(data=>{
        console.log(data);
        res.json({
            messsage:"User Created"
        })
    }).catch(err=>{
        console.log(err);
        res.json({
            messsage:"Error"
        })

    })

})


module.exports=router;