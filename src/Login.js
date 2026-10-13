import React from 'react'
import { useState } from 'react'
import './Login.css'
import image from './asset/Mec.jpg';

function Login( data) {

    console.log(data);

    
    const [value,setValue]= useState({
        name:"",
        fathername:"",
        email:"",
        number:"",
        address:"",
        hometown:"",
        district:"",
        referredby:""



    })

    const[error,setError]=useState(
        {
            nameError:"",
            fathernameError:"",
            emailError:"",
            numberError:"",
            addressError:"",
            hometownError:"",
            districtError:"",
            referredbyError:""
        }
    )
    

    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
        if(error.nameError != ""){
                setError({...error,nameError:""})
        }

    }

    

    function handleSumbit(event){

        event.preventDefault();
        if(value.name=="")
        {
           // console.log("field is Empty");
           setError(
            {
                ...error,
                nameError:"The Field is Required"
            }
           )
        }
        else if(value.name.length<3){
           // alert("NAME SHOULD BE MORE THAN 3 LETTER")
           setError(
            {
                ...error,
                nameError:" MORE THAN 3 LETTER"
            }
           )
        }
       
        
        

    }
  return (
    <>

    <div className='back'>
       
        
        <div className='display'>
            <h3 className='learn'> LEARN & DISCOVER </h3>
            <form className='detail'onSubmit={handleSumbit}>
            <input type="text" placeholder='NAME' name="name" onChange={change}/><br/>
            <span style={{color:'red'}}>{error.nameError}</span>
            <input type="text" placeholder='FATHERNAME' name="fathername" onChange={change}/><br/>
            <input type="email" placeholder='EMAIL'name="email" onChange={change}/><br/>
            <input type="number" placeholder='NUMBER'name="number" onChange={change}/><br/>
            <input type="text" placeholder='ADDERSS'name="address" onChange={change}/><br/>
            <input type="text" placeholder='HOME TOWN'name="hometown" onChange={change}/><br/>
            <input type="text" placeholder='DISTRICT'name="district" onChange={change}/><br/>
            <input type="text" placeholder='REFERRED BY'name="referredby" onChange={change}/><br/>
            <button className='mit'type='submit'> SUBMIT </button>
            <h4 className='one'>One or more fields have an error. Please check and try again.</h4>

            </form>
        </div>
    
    
    </div>
    </>

  )
}

export default Login