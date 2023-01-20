import React from 'react';
import './Form.css'

function Form() {
  return (
    <>
    <div className="container">
        <div className="container-main">
            <section className="top">
                <h1 className="title">Delivery fee calculator</h1>
            </section>
            <section className="main">
                <div className="cart-value fl">
                    <p>Cart Value</p>
                    <input type="number" placeholder="e.g 20"/>
                    <p className="icn">₤</p>
                </div>
                <div className="delivery-distance fl">
                    <p>Delivery distance</p>
                    <input type="number" placeholder="e.g 20"/>
                    <p className="icn">M</p>
                </div>
                <div className="amount-of-items fl">
                    <p>Amount of items</p>
                    <input type="number" placeholder="e.g 1"/>
                    <p></p>
                </div>
                <div className="time fl">
                    <p>Time</p>
                    <input type="time"/>
                    <p className="icn"></p>
                </div>
                <div className="date fl">
                    <p>Date</p>
                    <input type="date"/>
                    <p className="icn"></p>
                </div>
                <div >
                    <button href="" className="btn">Calculate delivery price</button>
                </div>
                <div className="delivery-price">
                    Delivery price: <span><i className="fa-sharp fa-solid fa-sterling-sign"></i></span> 2
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default Form