import styles from "./Home.module.css";
import Aside from "../../../components/homeAside/Aside";
import Card from "../../../components/card/Card";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseInit";
import { collection, getDocs } from "firebase/firestore";


function Home({props}){
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        async function fetchProducts(){

            const newProducts = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                newProducts.push({docId: doc.id, ...doc.data()});
                // console.log(doc.id, " => ", doc.data());
            });
            setProduct(newProducts);
        }
        fetchProducts();
    },[]);

    console.log("products:",products);


    return(
        <>
        <div className={styles.homePageContainer}>
            <Aside/>
            <form className={styles.homePageSearchFrom}>
                    <input type="search" placeholder="Search By Name" className={styles.homePageSearchInput}/>
            </form>
            <div className={styles.productList}>
                {
                    products.map((product)=><Card product={product} key={product.docId} visiblePage="home"/>)
                }
            </div>
        </div>
          
        </>
    )
}

export default Home;