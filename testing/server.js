require("dotenv").config();
const app=require("./app");
const port=process.env.PORT || 8080

app.listen(port,function(){
    console.log(`Server Running at Port ${port}`);
})