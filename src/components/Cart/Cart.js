import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { 
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tex = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + totalShipping + tex;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Select Items : {quantity}</p>
            <p>Total Price : {total}</p>
            <p>Total Shipping : {totalShipping}</p>
            <p>Tex : {tex.toFixed(2)}</p>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;