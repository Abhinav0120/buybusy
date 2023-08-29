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
            // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            // console.log(source, " data: ", doc.data());
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            // console.log(source, " data: ", snapshot.data());
            // console.log(snapshot.data().items);
            const data = snapshot.data();
            console.log(data.items);
            
            setCart(data.items);
        });
        return () => unsub();

    },[])

    console.log(cart);

    return(
        <>
            <div className={styles.cartPageContainer}>
                <CartAside/>
                <div className={styles.productContainer}>
                    {cart.map((item)=>{
                        const product = item.product;
                        const quantity = item.quantity;
                        return(
                            <Card product={product} key={product.docId} quantity={quantity}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart;