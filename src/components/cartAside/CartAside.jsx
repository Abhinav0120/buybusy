import { Timestamp, collection, getDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import Cart from "../../pages/app/cart/Cart";
import styles from "./CartAside.module.css";
import { db } from "../../firebaseInit";
import useAuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

function CartAside({cart, totalPrice}){
  const {currentUser} = useAuthContext();

    // purches the products in the cart
    const handlePurchase = async () => {
        try {
        const ordersRef = doc(db, "orders", currentUser.uid);
        const ordersSnapshot = await getDoc(ordersRef);
        const ordersData = ordersSnapshot.data() || { orderList: [] };

        const newOrder = {
            items: cart.map(item => ({
            ...item.product,
            quantity: item.quantity,
            totalCartPrice: item.product.price * item.quantity
            })),
            totalOrderAmount: totalPrice, 
            createdAt: Timestamp.fromDate(new Date())
        };
        const newOrderList = [...ordersData.orderList, newOrder];
        await setDoc(ordersRef, {orderList: newOrderList});
    
        // Clear the user's cart in the "carts" collection
        const cartRef = doc(db, "carts", currentUser.uid);
        await deleteDoc(cartRef);

            toast("Order placed successfully !");
            console.log("Order placed successfully!");
        } catch (error) {
            toast("Error placing order !");
            console.error("Error placing order:", error);
        }
    };
  
    return (
        <>
            <aside className={styles.cartAsideContainer}>
                <p className={styles.price}>TotalPrice:- &#x20b9; {totalPrice}/-</p>
                <Link to="/myorders">
                    <button className={styles.purchaseButton} onClick={handlePurchase}> Purchase </button>
                </Link>
            </aside>
        </>
    )
}

export default CartAside;