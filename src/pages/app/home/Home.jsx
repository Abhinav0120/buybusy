import styles from "./Home.module.css";
import Aside from "../../../components/homeAside/Aside";
import Card from "../../../components/card/Card";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseInit";
import { collection, getDocs } from "firebase/firestore";


function Home({props}){
    const [products, setProduct] = useState([]);
    const [nameFilter, setNameFilter] = useState("")
    // const [priceFilter, setPriceFilter] = useState({ min: 0, max: 750 });
    const [priceFilter, setPriceFilter] = useState(750);

    const [categoryFilters, setCategoryFilters] = useState({
        "men's clothing": false,
        "women's clothing": false,
        jewelery: false,
        electronics: false,
    });

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

    // Function to handle name search query changes
    const handleNameInputChange = (event) => {
        setNameFilter(event.target.value);
    };

    // function to handle price filter changes
    const handlePriceFilterChange = (event) =>{
        setPriceFilter(Number(event.target.value));
    }

    const handleCategoryFilterChange = (event)=>{
        const categoryName = event.target.name;
        setCategoryFilters({
            ...categoryFilters,
            [categoryName]: event.target.checked,
        })
    }

    const filteredProducts = products
    .filter((product) => {
        // Filter by search query
        if (nameFilter.trim() === "") {
        return true; // No search query, keep all products
        }

        // Filter by product name
        return product.title.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((product) => {
        // Filter by price
        // return product.price <= priceFilter.max;
        return product.price <= priceFilter;

    })
    // .filter((product) => {
    //     // Filter by category
    //     return (
    //         (categoryFilters["men's clothing"] && product.category === "men's clothing") ||
    //         (categoryFilters["women's clothing"] && product.category === "women's clothing") ||
    //         (categoryFilters.jewelery && product.category === "jewelery") ||
    //         (categoryFilters.electronics && product.category === "electronics")
    //       );
    // });

  


    console.log("products:",products);
    console.log("filteredProduct",filteredProducts);
    console.log("priceFilter:", priceFilter);
    console.log("categoryFilter:", categoryFilters);



    return(
        <>
        <div className={styles.homePageContainer}>
            <Aside  priceFilter={priceFilter}
                    onPriceFilterChange={handlePriceFilterChange}
                    categoryFilters={categoryFilters}
                    onCategoryFilterChange={handleCategoryFilterChange}/>

            <form className={styles.homePageSearchFrom}>
                    <input  type="search" 
                            placeholder="Search By Name" 
                            className={styles.homePageSearchInput}
                            onChange={handleNameInputChange}/>
            </form>
            <div className={styles.productList}>
                {
                    filteredProducts.map((product)=><Card product={product} key={product.docId} visiblePage="home"/>)
                }
            </div>
        </div>
          
        </>
    )
}

export default Home;