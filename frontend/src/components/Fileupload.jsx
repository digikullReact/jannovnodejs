import React from 'react'
import { useState } from 'react'
import axios from "axios";
import config from "../config";
const Fileupload = () => {
const [state,setState]=useState({
  name:"",
  email:"",
  file:""
})

const handleFileChange=(event)=>{


  setState({...state,file:event.target.files[0]});
}

const handleInputChange=(event)=>{


  setState({...state,[event.target.name]:event.target.value});

}

const handleClick=()=>{

  const formdata=new FormData();

  formdata.append("file",state.file);
  formdata.append("name",state.name);
  formdata.append("email",state.email);

  axios.post(`${config.url}/filecloudinary`,formdata).then(response=>{
    console.log(response.data);

   }).catch(err=>{
     console.log(err);
   })


}

  return (
    <div>

     <input type="file" onChange={handleFileChange}  /><br></br>

     <input type="text" onChange={handleInputChange} name='name' placeholder='Name'/><br></br>
     <input type="text" onChange={handleInputChange} name='email' placeholder='Email'/><br></br>

     <button onClick={handleClick}>
      Upload Data
     </button>

     

    </div>
  )
}

export default Fileupload