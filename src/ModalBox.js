import {React,useState} from 'react';
import './ModalBox.css';

function ModalBox(){

    const [Modal, setModal]=useState(false)

    return (
        <>

        <div>ModalBox</div>
        {Modal ? <div className="modal">
            
            <span>Are You sure,Do You want to continue?</span>
            <button onClick={()=>setModal(false)}>OK</button>
        </div> : ""

        }
        <button onClick={()=> setModal(true)}>confrim</button>
        <div>
            <button className="xButton"> x</button>
            <img src={image} width={"100px"} height={"100px"}/>
            <h1>Secure all your devices</h1>
            <p>Ensure your mobile phone, laptop and other<br />
            device are protected online</p>
            <button className='premium'></button>
        </div>
        </>
    )
}
export default ModalBox;