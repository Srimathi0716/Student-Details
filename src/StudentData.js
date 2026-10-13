import {React,useState} from 'react';


const StudentData = ()=>{

    const task=[{
    name:"Rithanya",
    age: 20,
    course:"CSE"
    }]

  const [value,setValue]=useState(false);
   const [input,setInput]=useState(); 
   const [age,setAge]=useState();

   function register(event){
        setInput(event.target.value)
    }

    function ages(event){
        setAge(event.target.value)
    }
    

return(
    <>
    <form>
            name:<input onChange={names}/><br/>
            age:<input onChange={ages}/><br/>
            
            <button type="submit">Submit</button>
   </form>
    </>
 )

}
export default StudentData;
