import styles from "./Card.module.css";
function Card(){
    return(
        <>
            <div className={styles.productContainer}>
                <div className={styles.productImageContainer}>
                    <img    src="	https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            alt="Product"
                            className={styles.productImage}/>
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.productName}>
                        <p>Fjallraven - Foldsack No. 1 Backpac...</p>
                    </div>
                    <div className={styles.productPrice}>
                        <p>&#x20b9; 1099</p>
                    </div>
                    <button className={styles.addToCartButton} title="Add to Cart">
                        Add to Cart
                    </button>
                </div>
            </div>
           
        </>
    )
}

export default Card;