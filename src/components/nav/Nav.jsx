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

// https://cdn-icons-png.flaticon.com/128/10473/10473299.png
// https://cdn-icons-png.flaticon.com/128/9073/9073032.png
// https://cdn-icons-png.flaticon.com/128/2163/2163350.png

// https://cdn-icons-png.flaticon.com/128/5645/5645046.png
// https://cdn-icons-png.flaticon.com/128/6711/6711581.png
// https://cdn-icons-png.flaticon.com/128/3518/3518736.png
// https://cdn-icons-png.flaticon.com/128/172/172163.png
// https://cdn-icons-png.flaticon.com/128/9554/9554821.png
