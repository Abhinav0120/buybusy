import styles from "./Home.module.css";
import Aside from "../../../components/aside/Aside";
import Card from "../../../components/card/Card";
function Home({props}){
    return(
        <>
        <div className={styles.homePageContainer}>
            <Aside/>
            <form className={styles.homePageSearchFrom}>
                    <input type="search" placeholder="Search By Name" className={styles.homePageSearchInput}/>
            </form>
            <div className={styles.productList}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    
            </div>
        </div>
          
        </>
    )
}

export default Home;