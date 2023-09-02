import styles from "./Home.module.css";
import Aside from "../../../components/homeAside/Aside";
import Card from "../../../components/card/Card";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseInit";
import { collection, getDocs } from "firebase/firestore";
import Spinner from 'react-spinner-material';
import React, { Component } from 'react';


function Home({props}){
    const [products, setProduct] = useState([]);
    const [nameFilter, setNameFilter] = useState("")
    const [priceFilter, setPriceFilter] = useState(750);
    const [categoryFilters, setCategoryFilters] = useState({
        mensFashion: false,
        womensFashion: false,
        jewelery: false,
        electronics: false,
    });

    const [defaultCategoryState, setCategotyState] = useState(true);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        async function fetchProducts(){
            setIsLoading(true);

            const newProducts = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                newProducts.push({docId: doc.id, ...doc.data()});
                // console.log(doc.id, " => ", doc.data());
            });
            setProduct(newProducts);
            setIsLoading(false);

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

    // function to handle category filter
    const handleCategoryFilterChange = (event)=>{
       const categoryName = event.target.name;
        setCategoryFilters({
            ...categoryFilters,
            [categoryName]: event.target.checked,
        });

    }

    useEffect(()=>{
        let newCategoryState;
        if (
            categoryFilters.mensFashion||
            categoryFilters.womensFashion||
            categoryFilters.jewelery||
            categoryFilters.electronics
        ) {
            newCategoryState = false;
        } else {
            newCategoryState = true;
        }
    
        setCategotyState(newCategoryState);
        console.log("default catagoryState:",newCategoryState);
    
    },[categoryFilters]);
      
    // Logic for getting filteredProducts
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
    .filter((product) => {
        // Filter by category
        if(defaultCategoryState){
            return true;
        }
        return (
          (categoryFilters.mensFashion && product.category=== "men's clothing") ||
          (categoryFilters.womensFashion && product.category=== "women's clothing") ||
          (categoryFilters.jewelery && product.category === "jewelery") ||
          (categoryFilters.electronics && product.category=== "electronics")
        );
      });

    // console.log("products:",products);
    // console.log("filteredProduct",filteredProducts);
    // console.log("priceFilter:", priceFilter);
    // console.log("categoryFilter:", categoryFilters);

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
            {
                isLoading?
                <div className={styles.snipperStyle}>
                    <Spinner radius={100} color={"#333"} stroke={4} visible={true} />
                </div>:
                <div className={styles.productList}>
                    {
                        filteredProducts.map((product)=><Card product={product} key={product.docId} visiblePage="home"/>)
                    }
                </div>
            }
            
        </div>
          
        </>
    )
}

export default Home;