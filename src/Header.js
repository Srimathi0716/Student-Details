//import React from "react";
import {React,useState} from 'react';

function Header(){

    const[status,setStatus]=useState("");


    const Ctime=new Date().toLocaleTimeString();
    console.log(Ctime)
    if(Ctime>="8:00:00"&& status !="grey"){
        console.log("System is offline");
        setStatus("grey")
    }
    //else{
      //  console.log("System is offline");
    //}   
    return(
        <>
        <div style={{width:"100%", height: "100vh",backgroundColor: status}}>
        Header React
        {status}
        <button disabled ={status=="grey"?true:false}></button>
        </div>
        </>
    )
}
export default Header;