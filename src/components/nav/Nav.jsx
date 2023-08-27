import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav(){
    return(
        <>
            <header>
                <nav>
                    <div className={styles.navbarContainer}>
                        <NavLink to="/" className={styles.navbarLogo}>
                            Busy Buy
                        </NavLink>
                        <ul className={styles.navMenu}>
                            <li className={styles.navItem}>
                                <NavLink to="/" className={styles.navLink}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073032.png" className={styles.iconStyle} alt="home"/>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink to="/myorders" className={styles.navLink}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/6815/6815043.png" className={styles.iconStyle} alt="home"/>
                                    <span>My orders</span>
                                </NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink to="/cart" className={styles.navLink}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/630/630746.png" className={styles.iconStyle} alt="home"/>
                                    <span>Cart</span>
                                </NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink to="/login" className={styles.navLink}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/6711/6711581.png" className={styles.iconStyle} alt="home"/>
                                    <span>SignIn</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Nav;


// home
// https://cdn-icons-png.flaticon.com/128/10473/10473299.png
// https://cdn-icons-png.flaticon.com/128/9073/9073032.png
// https://cdn-icons-png.flaticon.com/128/2163/2163350.png

// LogIn
// https://cdn-icons-png.flaticon.com/128/5645/5645046.png
// https://cdn-icons-png.flaticon.com/128/6711/6711581.png
// https://cdn-icons-png.flaticon.com/128/3518/3518736.png
// https://cdn-icons-png.flaticon.com/128/172/172163.png
// https://cdn-icons-png.flaticon.com/128/9554/9554821.png

// My orders
// https://cdn-icons-png.flaticon.com/128/6815/6815043.png
// https://cdn-icons-png.flaticon.com/128/3500/3500833.png
// https://cdn-icons-png.flaticon.com/128/3502/3502601.png
// https://cdn-icons-png.flaticon.com/128/9431/9431186.png

// Cart
// https://cdn-icons-png.flaticon.com/128/630/630746.png
// https://cdn-icons-png.flaticon.com/128/6599/6599849.png
// https://cdn-icons-png.flaticon.com/128/5542/5542671.png
// https://cdn-icons-png.flaticon.com/128/9827/9827199.png
// https://cdn-icons-png.flaticon.com/128/4290/4290854.png
// https://cdn-icons-png.flaticon.com/128/891/891462.png
// https://cdn-icons-png.flaticon.com/128/10703/10703059.png
// https://cdn-icons-png.flaticon.com/128/10695/10695233.png
// https://t3.ftcdn.net/jpg/00/73/10/64/240_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg