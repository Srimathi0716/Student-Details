import React from 'react'
import shoe from './asset/Shoe.jpg'
import Shoe2 from './asset/Shoe2.jpg'
import Shoe3 from './asset/Shoe3.jpg'
import './Product.css'


const Product = ({ productObj }) => {


    return (
        <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={shoe} className="imageShoe" />
                            <img src={Shoe2} className="imageShoe" />
                            <img src={Shoe3} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product