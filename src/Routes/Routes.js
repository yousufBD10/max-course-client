import { createBrowserRouter } from "react-router-dom";
import Blog from "../componenets/Blog/Blog";
import Courses from "../componenets/Courses/Courses";
import ErrorPage from "../componenets/ErrorPage/ErrorPage";
import Faq from "../componenets/FAQ/Faq";

import Main from "../componenets/Main/Main";
import Home from "../componenets/Pages/Home/Home";
import Login from "../componenets/Pages/Login/Login";
import Register from "../componenets/Pages/Register/Register";



export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,
errorElement: <ErrorPage></ErrorPage>,
children:[
{
    path:'/home',
    element: <Home></Home>,
   
},


{
    path:'/courses',
    element: <Courses></Courses>,
},
{
    path:'/faq',
    element:<Faq></Faq>,
},
{
    path:'/blog',
    element: <Blog></Blog>,
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