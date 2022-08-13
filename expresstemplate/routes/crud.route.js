const express=require("express");
const router=express.Router();
const {getData,saveData,getDataPagination,updateData,updateOneData,deleteData,deleteOneData}=require("../controllers/crud.controller");



router.get("/",getData);
router.post("/save",saveData);
router.get("/pagination",getDataPagination);
router.put("/update",updateData);
router.put("/updateOne",updateOneData);
router.delete("/deleteMany",deleteData);
router.delete("/deleteOne/:sid",deleteOneData);


module.exports=router;
