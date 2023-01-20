import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, seller, price, stock, img, ratings} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className = 'properties'>
                <h4 className='product-name'>Name : {name}</h4>
                <p><small>by : {seller}</small></p>
                <h4>Price : {price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p><small>Ratings : {ratings}</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;