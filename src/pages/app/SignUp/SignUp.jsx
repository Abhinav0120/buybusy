import styles from "./SignUp.module.css";

function SingUp(){
    return(
        <div className={styles.signUpFormContainer}>
        <form className={styles.signUpForm}>
            <h2 className={styles.title}>
                Sign Up
            </h2>
            <input type="text" name="name" className={styles.signUpInput} placeholder="Enter Name"/>
            <input type="email" name="email" className={styles.signUpInput} placeholder="Enter Email"/>
            <input type="password" name="password" className={styles.signUpInput} placeholder="Enter Password"/>
            <button className={styles.signUpButton}>Sign In</button>
        </form>

       </div>
    )
}

export default SingUp;