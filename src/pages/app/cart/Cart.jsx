import styles from "./Cart.module.css";
import Card from "../../../components/card/Card";
import CartAside from "../../../components/cartAside/CartAside";
import useAuthContext from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseInit";


function Cart(){
    const [cart, setCart] = useState([]);
    const {currentUser} = useAuthContext();
    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "carts", currentUser.uid), (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            const data = snapshot.data();
            if(data){
                // if(data.items.length!==0){
                    console.log(data.items);
                setCart(data.items);
                // }
            }
           
        });
        return () => unsub();

    },[])

    console.log(cart);

    return(
        <>
            {cart.length!==0 ?
                <div className={styles.cartPageContainer}>
                    <CartAside/>
                    <div className={styles.productContainer}>
                        {cart.map((item)=>{
                            const product = item.product;
                            const quantity = item.quantity;
                            
                            return(
    
                                <Card product={product} key={product&&product.docId} quantity={quantity} visiblePage="cart"/>
                            )
                        })}
                    </div>
                </div>: 
            <h1>Cart is Empty!</h1>}
        </>
    )
}

export default Cart;