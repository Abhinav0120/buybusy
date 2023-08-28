import styles from "./Card.module.css";
function Card({product}){
    return(
        <>
            <div className={styles.productContainer}>
                <div className={styles.productImageContainer}>
                    <img    src={product.image}
                            alt="Product"
                            className={styles.productImage}/>
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.productName}>
                        <p>{product.title}</p>
                    </div>
                    <div className={styles.productPrice}>
                        <p>&#x20b9; {product.price}</p>
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