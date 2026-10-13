import {React,useState} from "react";


function Assesment(){
    
    const [dark, setDark] = useState(false);
    const [value, setValue] = useState(0)


    
     
    return(
        <div style={{ backgroundColor: value ? "#0f1013" : "white"}}>
          <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
        </button><br />  
        </div>
    )
}
export default Assesment;