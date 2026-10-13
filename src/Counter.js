import {React,useState,useEffect} from 'react';

const Counter =()=>{
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

    const btn ={
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#169130",
        color: "white",
        border: "none",
        margin: "5px",
        cursor: "pointer"

    }
    //without depedensies
    //useEffect(()=>{
      //  console.log("UseEffect Rendered")
   // },[])

    //with depedensies
    //useEffect(()=>{
       // console.log("counter button is pressed")
    //},[count])

    //useEffect(()=>{
      //  console.log("every time")
    //})

    function timeOut(){
        setTimeout(
            ()=>{
                console.log("test")
            }, 1000
        );
    }
    function interval(){
        setInterval(()=>{
            console.log("interval test")
        },1000)
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button style={btn} onClick={()=>setCount(count+1)}>INCREMENT</button>
            <button style={btn} onClick={()=>setCount(count - 1)}>DECREMENT</button>
            <button style={btn} onClick={()=>setCount(0)}>RESET</button>
            <button style={btn} onClick={()=>setCount1(count+1)}>INCREMENT</button>
            <button  style={btn} onClick={timeOut}>TIME</button>
            <button style={btn} onClick={interval}>INTERVAL</button>
        </div>
    )
}
export default Counter;