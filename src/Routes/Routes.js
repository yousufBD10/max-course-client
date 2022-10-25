import { createBrowserRouter } from "react-router-dom";

import Main from "../componenets/Main/Main";
import Home from "../componenets/Pages/Home/Home";
import Login from "../componenets/Pages/Login/Login";
import Register from "../componenets/Pages/Register/Register";



export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,

children:[
{
    path:'/',
    element: <Home></Home>,
   
},
{
    path:'/home',
    element: <Home></Home>,
   
},

{
    path:'/register',
    element: <Register></Register>,
},

{
    path:'/login',
    element: <Login></Login>

},
]
},

])