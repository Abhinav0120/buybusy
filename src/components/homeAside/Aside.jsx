import styles from "./Aside.module.css"
// Aside section for filters
function Aside({
    priceFilter,
    onPriceFilterChange,
    categoryFilters,
    onCategoryFilterChange,
}){
    return(
        <>
            <aside className={styles.filterContainer}>
                <h2>Filter</h2>
                <form>
                    <label htmlFor="price">&#x20b9; {priceFilter}</label>
                    <input  type="range" 
                            id="price" 
                            name="price" 
                            min="1" 
                            max="1000"
                            step="10"
                            value={priceFilter}
                            className={styles.filterPriceRange}
                            onChange={onPriceFilterChange}/>
                    <h2>Category</h2>
                    <div className={styles.filterCategoryContainer}>
                        <div>
                            <input  type="checkbox" 
                                    id="mensFashion" 
                                    name="mensFashion"
                                    checked={categoryFilters.mensFashion}
                                    onChange={onCategoryFilterChange}/>
                            <label htmlFor="mensFashion">Men's Clothing</label>
                        </div>
                        <div>
                            <input  type="checkbox"
                                    id="womensFashion"
                                    name="womensFashion"
                                    checked={categoryFilters.womensFashion}
                                    onChange={onCategoryFilterChange}
                                    />
                            <label htmlFor="womensFashion">Women's Clothing</label>
                        </div>
                        <div>
                            <input  type="checkbox" 
                                    id="jewelery"
                                    name="jewelery"
                                    checked={categoryFilters.jewelery}
                                    onChange={onCategoryFilterChange}/>
                            <label htmlFor="jewelery">Jewelery</label>
                        </div>
                        <div>
                            <input  type="checkbox" 
                                    id="electronics"
                                    name="electronics"
                                    checked={categoryFilters.electronics}
                                    onChange={onCategoryFilterChange}/>
                            <label htmlFor="electronics">Electronics</label>
                        </div>

                    </div>
                </form>
            </aside>
        </>
    );
}

export default Aside;