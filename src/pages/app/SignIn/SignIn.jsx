import styles from "./SignIn.module.css";
import {Link} from "react-router-dom";
function SignIn(){
    return(
       <div className={styles.singInFormContainer}>
        <form className={styles.singInForm}>
            <h2 className={styles.title}>
                Sign In
            </h2>
            <input type="email" name="email" className={styles.loginInput} placeholder="Enter Email"/>
            <input type="password" name="password" className={styles.loginInput} placeholder="Enter Password"/>
            <button className={styles.signInButton}>Sign In</button>
            <Link className={styles.linkToSignUp}>
                <p style={{fontWeight: "600", margin: "0px"}}>
                    Or SignUp insted
                </p>
            </Link>

        </form>

       </div>
    )
}

export default SignIn;