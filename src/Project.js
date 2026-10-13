import {React,useState} from 'react';
import './Project.css';

const Project = ()=>{

    const [value,setValue]=useState(false);
    const [input,setInput]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    
    function inc(){
       // setValue(value+10)

       //if(value == 0){
        //setValue(1)
       //}
       //else{
        //setValue(0)
       //}

       //setValue(value === 0 ? 1 : 0)

       
    //setValue(!value)
    }
   // function getData(e){
     //   setInput(e.target.value)
    //}
    function handleSubmit(event){
     event.preventDefault();
     alert(input)
     alert(emaily)
    }
    function emaily(event){
       setEmail(event.target.value)
        
    }
    function register(event){
        setInput(event.target.value)
    }
    function ages(event){
        setAge(event.target.value)
    }
    //console.log(value)
    return(
        <center>
        <div style={{ backgroundColor: value ? "#0f1013" : "white",height: "100vh"}}>
        {value}
        <span  style ={{cursor: "not-allowed"}}onClick={inc}> {value ? "🌇" : "🌙"}</span>
        <form onSubmit={handleSubmit}>
            Name:<input onChange={register}/><br/>
            Email:<input onChange={emaily}/><br/>
            Age:<input onChange={(e)=> setAge(e.target.value)}/><br />
            <button type="submit">Submit</button>
        </form>
        </div>
        </center>
    )
}
export default Project;