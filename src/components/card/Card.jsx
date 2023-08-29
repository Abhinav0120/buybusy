import styles from "./Card.module.css";
import useAuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseInit"; 


function Card({product}){
    const {currentUser} = useAuthContext();
    const navigate = useNavigate();

    const handleAddToCart = async (product)=>{
        if(currentUser === null){
            navigate("/login");
            return;
        }
        // here i want to add the product to the usersCart
        try {
            const cartRef = doc(db, "carts", currentUser.uid);
            const cartSnapshot = await getDoc(cartRef);
        
            if (cartSnapshot.exists()) {
              const cartData = cartSnapshot.data();
              const existingCartItem = cartData.items.find(item => item.product.id === product.id);
        
              if (existingCartItem) {
                // Update the quantity if the product already exists in the cart
                const updatedItems = cartData.items.map(item =>
                  item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                
                await setDoc(cartRef, { items: updatedItems }, { merge: true });
              } else {
                // Add the product to the cart if it doesn't exist
                const updatedItems = [...cartData.items, { product, quantity: 1 }];
                await setDoc(cartRef, { items: updatedItems }, { merge: true });
              }
            } else {
              // Create a new cart if it doesn't exist
              await setDoc(cartRef, {
                userId: currentUser.uid,
                items: [{ product, quantity: 1 }],
              });
            }
        
            console.log("Product added to cart.");
          } catch (error) {
            console.error("Error adding product to cart:", error);
          }
    } 
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
                    <button className={styles.addToCartButton} title="Add to Cart"
                            onClick={()=>handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
           
        </>
    )
}

export default Card;