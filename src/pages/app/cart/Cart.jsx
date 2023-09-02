import styles from "./Cart.module.css";
import Card from "../../../components/card/Card";
import CartAside from "../../../components/cartAside/CartAside";
import useAuthContext from "../../../context/AuthContext";
import { useEffect } from "react";
import {toast} from "react-toastify";

// import { useEffect, useState } from "react";
// import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
// import { db } from "../../../firebaseInit";


function Cart({cart, totalPrice}){
   
    return(
        <>
            {cart.length!==0 ?
                <div className={styles.cartPageContainer}>
                    <CartAside cart={cart} totalPrice={totalPrice}/>
                    <div className={styles.productContainer}>
                        {cart.map((item)=>{
                            const product = item.product;
                            const quantity = item.quantity;
                            
                            return(
    
                                <Card product={product} key={product&&product.docId} quantity={quantity} visiblePage="cart" totalPrice={totalPrice}/>
                            )
                        })}
                    </div>
                </div>: 
            <h1>Cart is Empty!</h1>}
        </>
    )
}

export default Cart;