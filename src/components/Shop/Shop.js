import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        console.log('product data before fetch');
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log('product storage first line');
        })
    },[])

    useEffect(()=>{
        console.log('local storage',products);
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                console.log(addedProduct);
            }
        }
        // console.log('product loaded');
    },[products])

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop_container'>
            <div className="products-container">
                {
                    products.map(product => <Product key = {product.id} product = {product} handleAddToCart = {handleAddToCart} ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;