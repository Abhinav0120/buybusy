import styles from "./Card.module.css";
import useAuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseInit"; 


function Card({product, visiblePage, quantity}){
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

    const handleRemoveFromCart = async (product)=>{
      if (currentUser === null) {
          navigate("/login");
          return;
      }

      try {
          const cartRef = doc(db, "carts", currentUser.uid);
          const cartSnapshot = await getDoc(cartRef);

          if (cartSnapshot.exists()) {
              const cartData = cartSnapshot.data();
              const updatedItems = cartData.items.filter(item => item.product.id !== product.id);

              await setDoc(cartRef, { items: updatedItems }, { merge: true });

              console.log("Product removed from cart.");
          }
      } catch (error) {
          console.error("Error removing product from cart:", error);
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
                        {visiblePage==="cart"&&
                        <div className={styles.productQuntityContainer}>
                          <img  src="https://cdn-icons-png.flaticon.com/128/11519/11519974.png"></img>
                          <span style={{fontWeight:"600", margin:"5px"}}>{quantity}</span>
                          <img  src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"></img>
                        </div>}
                        
                    </div>
                    {visiblePage==="home"?
                      <button className={styles.addToCartButton} title="Add to Cart"
                              onClick={()=>handleAddToCart(product)}>
                          Add to Cart
                      </button>:
                      <button className={styles.removeFromCartButton} title="Remove From Cart"
                              onClick={()=>handleRemoveFromCart(product)}
                              >
                          Remove From Cart
                      </button>}
                    
                </div>
            </div>
           
        </>
    )
}

export default Card;

// minus
// https://cdn-icons-png.flaticon.com/128/1828/1828899.png
// https://cdn-icons-png.flaticon.com/128/10308/10308996.png
// https://cdn-icons-png.flaticon.com/128/11519/11519974.png

// plus
// https://cdn-icons-png.flaticon.com/128/1828/1828817.png
// https://cdn-icons-png.flaticon.com/128/4677/4677490.png