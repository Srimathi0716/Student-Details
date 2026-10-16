
import React,{useState} from "react";

function StudentCard({student}){
    const[data,setData]=useState({
        Name:"",
        Username:"",
        Email:""
    })
    const[value,setValue]=useState({
        Name:"",
        Username:"",
        Email:""
    })

    function change (event){
        setValue(
            ...value,
            [event.target.name]=event.target.value
        )
    }
    return(
        <>
        <div>
           <span>Username:{student.username}</span><br/>
           <span>Email:{student.email}</span><br/><br/>
           </div>
        </>
    )
}

export default StudentCard;