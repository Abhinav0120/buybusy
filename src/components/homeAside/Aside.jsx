import styles from "./Aside.module.css"

function Aside(){
    return(
        <>
            <aside className={styles.filterContainer}>
                <h2>Filter</h2>
                <form>
                    <label htmlFor="price">Price: 0000</label>
                    <input  type="range" 
                            id="price" 
                            name="price" 
                            min="1" 
                            max="100000"
                            step="10"
                            defaultValue="75000"
                            className={styles.filterPriceRange}/>
                    <h2>Category</h2>
                    <div className={styles.filterCategoryContainer}>
                        <div>
                            <input type="checkbox" id="mensFashion" name="mensFashion"/>
                            <label htmlFor="mensFashion">Men's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="womensFashion" name="womensFashion"/>
                            <label htmlFor="womensFashion">Women's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jewelery" name="jewelery"/>
                            <label htmlFor="jewelery">Jewelery</label>
                        </div>
                        <div>
                            <input type="checkbox" id="electronics" name="electronics"/>
                            <label htmlFor="electronics">Electronics</label>
                        </div>

                    </div>
                </form>
            </aside>
        </>
    );
}

export default Aside;