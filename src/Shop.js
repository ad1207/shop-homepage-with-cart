import React from "react";
import { useState, createContext } from "react";
import CartContext from "./cartCon";
import { CardComponent } from "./section";
import NavbarComponent from './navbar';
import HeaderComponent from './header';
import SectionComponent from './section';
import FooterComponent from './footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from "./checkOut";

function ShopComponent(){
    const [cart,setCart]=useState(0);
    const [cartArray, setArray]=useState([]);
    const [amount,setAmount]=useState(0);
    const handleIncrement = (values) =>{
        setCart(cart+1);
        var arr=cartArray;
        arr.push(values);
        setArray(arr);
        setAmount(amount+parseFloat(values.price.slice(1)));
        console.log(arr);
    }
    const handleDecrement = (values) =>{
        setCart(cart-1);
        var arr=cartArray;
        for(var i=0;i<arr.length;i++){
            if(arr[i].name==values.name && arr[i].price==values.price){
                arr.splice(i, 1);
                break;
            }
        }
        setArray(arr);
        setAmount(amount-parseFloat(values.price.slice(1)));
    }
    return(
        <span>
        <CartContext.Provider value={{cart:cart, cartArray:cartArray, handleIncrement:handleIncrement, handleDecrement:handleDecrement, amount:amount}}>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><NavbarComponent /><HeaderComponent /><SectionComponent /></>} />
                    <Route path="/cart" element={<CheckoutPage />} />
                </Routes>   
            </BrowserRouter>
        </div>
        <FooterComponent />
        </CartContext.Provider></span>
    )
}
export default ShopComponent;