import styles from "./Cart.module.css";
import Card from "../../../components/card/Card";
import CartAside from "../../../components/cartAside/CartAside";

function Cart(){
    return(
        <>
            <div className={styles.cartPageContainer}>
                <CartAside/>
                <div className={styles.productContainer}>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Cart;