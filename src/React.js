import {React,useState} from 'react';
function react(){
 const[count,setCount]=useState(0);
 function Increment(){
    setCount(count*2)
 }
 return(
    <>
    {count}
    <button></button>
    </>
 )
}
export default React;