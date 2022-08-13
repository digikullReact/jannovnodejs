const User=require("../models/User");

const getData=(req,res)=>{

    User.find().then(data=>{
    
        res.json({
            message:"Success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })


}

//searching and sorting
const getDataPagination=(req,res)=>{
    const limit=req.query.limit;
    const skip=req.query.skip;
    const search=req.query.search;

    //skip and limit

    // Regex is used to search particular (pattern matching) in a large text

    User.find({name:{$regex:new RegExp(search)}}).skip(skip).limit(limit).then(data=>{
    
        res.json({
            message:"Success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })


}


const saveData=(req,res)=>{
/*
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    */
   const user=new User(req.body);

    user.save().then(result=>{

        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        console.log(err);

    })
  


}

//Update controller

const updateData=(req,res)=>{
    //updateMany --->all the records (updateMany in Mongodb)
    //updateOne  -->updates a single record

    User.updateMany({name:req.body.name},{$set:{email:req.body.email}}).then(result=>{
        res.json({
            message:"Update Success",
            data:result
        })
    }).catch(err=>{
        console.log(err);
    })

}

const updateOneData=(req,res)=>{
    //updateMany --->all the records (updateMany in Mongodb)
    //updateOne  -->updates a single record

    User.updateOne({_id:req.body.id},{$set:{email:req.body.email,name:req.body.name}}).then(result=>{
        res.json({
            message:"Update Success",
            data:result
        })
    }).catch(err=>{
        console.log(err);
    })

}



//Delete Controller

const deleteData=(req,res)=>{

    User.deleteMany({name:req.body.name}).then(result=>{

        res.json({
            message:"SuccessFully Deleted",
            data:result
        })

    }).catch(err=>{
        console.log(err);
    })

}


const deleteOneData=(req,res)=>{

    User.deleteOne({_id:req.params.sid}).then(result=>{

        res.json({
            message:"SuccessFully Deleted",
            data:result
        })

    }).catch(err=>{
        console.log(err);
    })
    
}


module.exports={
    getData,
    saveData,
    getDataPagination,
    updateData,
    updateOneData,
    deleteData,
    deleteOneData
}