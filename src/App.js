import './App.css';
import { db } from './firebaseInit';
import Nav from './components/nav/Nav';
import Home from './pages/app/home/Home';
import SignIn from './pages/app/SignIn/SignIn';
import SignUp from './pages/app/SignUp/SignUp';
import Cart from './pages/app/cart/Cart';
import MyOrders from './pages/app/myOrders/MyOrders';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import { Children } from 'react';

function App() {
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
          element: <Cart/>
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
     <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
