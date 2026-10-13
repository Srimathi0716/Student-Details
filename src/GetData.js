import {React,useState,useEffect} from 'react'
import axios from 'axios'

const GetData = () => {
    const [data,setData]=useState([])
    
      useEffect (() =>{
     const get = axios.get("https://dummyjson.com/c/47fd-d239-4bb8-823a")
     .then((res)=>{setData(res.data)})
      },[])
    
  return (

    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
            </tr>
        </thead>
    </table>
    {data.map((i)=>{
        return(
            <>
            <tbody>
            <tr>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.id}</td>
            </tr>
            </tbody>
            </>
    )
    })}

    </>
  )
}
export default GetData;
