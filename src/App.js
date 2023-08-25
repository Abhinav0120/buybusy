import './App.css';
import { db } from './firebaseInit';
import Nav from './components/nav/Nav';
import Home from './pages/app/home/Home';
import SignIn from './pages/app/SignIn/SignIn';
import SingUp from './pages/app/SignUp/SignUp';


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
          path:"login",
          element: <SignIn/>
        },
        {
          path:"signup",
          element: <SingUp/>
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
