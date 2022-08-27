require("dotenv").config();
const express=require("express");
const cors=require("cors");
const cloudinary = require('cloudinary').v2;
const fs=require("fs");

cloudinary.config({ 
    cloud_name: 'shubhamdixit78788', 
    api_key: '755683721392763', 
    api_secret: '_68MF_J-kr0Z5Iw29XmSZmyxEFE',
    secure: true
  });

const multipart = require('connect-multiparty');
const  multipartMiddleware = multipart({ uploadDir: "./uploads" });
const app=express();
const port=process.env.PORT || 5000
app.use(cors());
app.use(express.static('uploads'))

// Routes

app.get("/",function(req,res){
    res.json({
        message:"Api Running"
    })
})

// File upload route
app.post("/file",multipartMiddleware,function(req,res){

    //console.log(req.files)
    //console.log(req.body);


    res.json({
        message:"File Uploaded",
        fileName:req.files.file.path.split("/")[1]
    })

})

// File upload route
app.post("/filecloudinary",multipartMiddleware,function(req,res){


    cloudinary.uploader.upload(req.files.file.path,
     function(error, result) {
     
        if(error){
            res.json({
                message:"Error",
                error:error
            })

            return;
        }

        fs.unlinkSync(req.files.file.path);

        res.json({
            message:"File Uploaded",
            fileName:result.url   //cloudinary url
        })
    
    });

   

})


app.listen(port,function(){
    console.log(`Server Running At Port ${port}`);
})