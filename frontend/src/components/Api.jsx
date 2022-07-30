import React,{useEffect,useState} from 'react'
import axios from "axios";
import config from "../config";

const Api = () => {
   const [state,setState]=useState("");

  useEffect(()=>{
    axios.get(`${config.url}`).then(response=>{
      setState(response.data);

    }).catch(err=>{
      console.log(err);
    })

  },[])

  return (
    <div>Api
     <h1>{state}</h1>


    </div>
  )
}

export default Api