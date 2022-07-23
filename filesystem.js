const fs =require("fs");
const fsPromises=require("fs/promises");
const os=require("os");

//This module helps us  in interacting with files  
//Write operation 
//Read Operation 
// Append Operation 
//Delete Operation 

//Write operation 

//callback version ,sync version ,promise version 
/*
fs.writeFile("app.txt","hello world people from India",function(err,data){
    console.log("Written something in file");

})
*/

//Append operation 
/*

fs.appendFile("main.txt",`hey there ${os.EOL}`,function(){
    console.log("Appended to the file");
})
*/
/*

fs.readFile("./files/copy.txt",'utf-8',function(err,data){
    console.log(data);

})
*/

//Delete operation 
/*

fs.unlink("./files/copy.txt",function(err,data){

    if(err){
        console.log(err);
        return;
    }

    console.log("file deleted");
})
*/

//Sync methods;
//fs.writeFileSync(); 
//fs.appendFileSync();
//fs.unlinkSync();

// You have to generate json data ,you have to write it to the file
// you have to read the content 
// write in another file 
// delete the original file 

// How to convert a callback into a promise 
/*
function readFilePromise(fileName){

    const promise=new Promise((res,rej)=>{
        fs.readFile(fileName,'utf-8',function(err,data){
           if(err){
            rej(err);
           }
           res(data);
        
        })

    })

return promise;

}

readFilePromise("./files/copy.txt").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})
*/
/*

fsPromises.readFile("./files/copy.txt",'utf-8').then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})
*/

//Fs readir 

fsPromises.readdir("/Users/shubhpro/julybatch").then(data=>{
   data.forEach(ele=>{
  //  console.log(ele);
   console.log( fs.lstatSync(`/Users/shubhpro/julybatch/${ele}`).isDirectory() );

   // if its a file then you have to append  in the file otherwise do nothing

    /*
    fs.lstat(ele,function(err,data){
       // console.log(data);
      //  console.log(data.isDirectory());
    })
    */
     


   })
}).catch(err=>{
    console.log(err);
})