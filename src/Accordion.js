import { React, useState } from "react";
import './Accordion.css';

const Accordion =() =>{
    const [open,setOpen]=useState(null)
    //function expand(){
      //  setOpen(!open)
    //}
    const accor = [
        {id:1,title:"accordion 1", para:"paragraph 1"},
        {id:2,title:"accordion 2", para:"paragraph 2"}
        
    ]
    function handleId(id){
        console.log(id)
         //setOpen(id)
        setOpen(open===id ? null : id)
        //console.log(open)
    }
    return(
        <>
        {/*<p className="head" onClick={expand}>Accordion 1</p>
        {open ? <p>paragraph</p> : ""}
        <p className='head'>Accordion 2</p> */}
    {
        accor.map ((res) => {
            return (
                <>
                  <p className='head' onClick={()=> handleId(res.id)}>{res.title}</p>
                  {res.id}
                  {open==res.id?<p>{res.para}</p>:""}
                </>
            )
        })
    }
      {open}  
        </>
    )
}
export default Accordion;

