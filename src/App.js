import './App.css';
import { db } from './firebaseInit';
import Nav from './components/nav/Nav';
import Home from './pages/app/home/Home';
import SignIn from './pages/app/SignIn/SignIn';
import SignUp from './pages/app/SignUp/SignUp';
import Cart from './pages/app/cart/Cart';
import MyOrders from './pages/app/myOrders/MyOrders';
import useAuthContext from './context/AuthContext';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import { Children } from 'react';

import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
// import { db } from "../../../firebaseInit";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {currentUser} = useAuthContext();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


    useEffect(()=>{
        if(currentUser!==null){
          const unsub = onSnapshot(doc(db, "carts", currentUser.uid), (snapshot) => {
            const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
            const data = snapshot.data();
            if(data){
                // if(data.items.length!==0){
                console.log(data.items);
                setCart(data.items);
                setTotalPrice(data.totalPrice);
                // }
            }else{
              setCart([]);
              setTotalPrice(0);
            }
           
        });
        return () => unsub();
        }
        
    },[currentUser])

    console.log(cart);


  console.log(currentUser);
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:"myorders",
          element: <MyOrders/>
        },
        {
          path:"myorders",
          element: <SignIn/>
        },
        {
          path:"cart",
          element: <Cart cart={cart} totalPrice={totalPrice}/>
        },
        {
          path:"login",
          element: <SignIn/>
        },
        {
          path:"signup",
          element: <SignUp/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
