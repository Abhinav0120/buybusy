import {useState} from "react";
import styles from "./SignIn.module.css";
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../../firebaseInit";
import useAuthContext from "../../../context/AuthContext";

function SignIn(){
    const [erro, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {dispatch} = useAuthContext();

    const navigate = useNavigate();

     const handleLogin = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user})
            navigate("/");
            console.log(user);
        })
        .catch((error) => {  
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
        });
     }
    return(
       <div className={styles.singInFormContainer}>
        <form onSubmit={handleLogin} className={styles.singInForm}>
            <h2 className={styles.title}>
                Sign In
            </h2>
            <input  type="email"
                    name="email" 
                    className={styles.loginInput} 
                    placeholder="Enter Email" 
                    onChange={(e)=>setEmail(e.target.value)}/>

            <input  type="password" 
                    name="password" 
                    className={styles.loginInput} 
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}/>

            <button className={styles.signInButton}>Sign In</button>

            <Link to="/signup" className={styles.linkToSignUp}>
                <p style={{fontWeight: "600", margin: "0px"}}>
                    Or SignUp insted
                </p>
            </Link>

        </form>

       </div>
    )
}

export default SignIn;