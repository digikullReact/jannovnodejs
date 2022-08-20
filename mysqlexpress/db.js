require('dotenv').config();
const { Sequelize,DataTypes } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD,{
    host: process.env.HOST,
    port:process.env.PORT,
    dialect: 'mysql'
  });

  async function  connectDb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
connectDb();

  const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
 
    },
    password:{
        type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });


  //Model Methods 

  const  insertIntoDb=async(data)=>{

    try {
            // Create a new user

            // MAke this dynamic
const jane = await User.create({ name: "Jane", email: "Doe" ,password:"1234"});
console.log("Jane's auto-generated ID:", jane.id);
return jane.id;

        
    } catch (error) {
        //return error;
        throw new Error(error);
    }


  }



module.exports={
    insertIntoDb
}