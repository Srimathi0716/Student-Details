import React, { useState } from 'react';
import axios from 'axios';

function InputBox() {
    const [form,setForm]=useState({
        username:""
    });


const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [value,setValue]=useState("")


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
}



  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LOGIN PAGE</h1>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">Submit</button>
      </div>
    </div>

  )
}

export default InputBox;
