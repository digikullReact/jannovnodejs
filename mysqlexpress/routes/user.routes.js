const express=require("express");
const router=express.Router();
const {insertIntoDb,selectAllData, searchData,updateData} =require("../db");
const {encryptPassword,} =require("../middlewares/bcrypt");


router.post("/",encryptPassword,function(req,res){

    insertIntoDb(req.body).then(data=>{
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

router.put("/data",function(req,res){
    updateData(req.body).then(result=>{
        res.json({
            message:"Successfully Updated",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})

router.get("/data/:name",function(req,res){
    const name=req.params.name
    searchData(name).then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})


router.put("/data",function(req,res){
    const name=req.body.name
    searchData(name).then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})




router.get("/hello",function(req,res){
    res.send("hii");
})

/*
router.get("/data",function(req,res){
    /*for(let i=0;i<1000000000;i++){
        console.log("hiii"+i);

    }
    res.send("hii there");
})
*/

module.exports=router;