import styles from "./SignUp.module.css";
import {auth} from "../../../firebaseInit";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../context/AuthContext";


function SignUp(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();  
    
    const {dispatch} = useAuthContext()
    
    const navigate = useNavigate();

    const handleSignUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user});
            console.log(user);
            navigate("/");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }
    return(
        <div className={styles.signUpFormContainer}>
        <form className={styles.signUpForm} onSubmit={handleSignUp}>
            <h2 className={styles.title}>
                Sign Up
            </h2>
            <input  type="text" 
                    name="name" 
                    className={styles.signUpInput} 
                    placeholder="Enter Name" 
                    onChange={(e)=>setName(e.target.value)}/>
            <input  type="email" 
                    name="email" 
                    className={styles.signUpInput} 
                    placeholder="Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}/>
            <input  type="password" 
                    name="password" 
                    className={styles.signUpInput} 
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}/>
            <button className={styles.signUpButton}>Sign up</button>
        </form>

       </div>
    )
}

export default SignUp;