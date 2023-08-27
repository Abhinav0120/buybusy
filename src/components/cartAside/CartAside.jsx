import Cart from "../../pages/app/cart/Cart";
import styles from "./CartAside.module.css";


function CartAside(){
    return (
        <>
            <aside className={styles.cartAsideContainer}>
                <p className={styles.price}>TotalPrice:- &#x20b9; 1099/-</p>
                <button className={styles.purchaseButton}> Purchase </button>
            </aside>
        </>
    )
}

export default CartAside;