import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../componenets/AllCourses/AllCourses";
import Blog from "../componenets/Blog/Blog";
import BlogCard from "../componenets/Blog/BlogCard";
import BlogDetails from "../componenets/Blog/BlogDetails";

import CheckOut from "../componenets/CheckOutPage/CheckOut";
import CourseDetails from "../componenets/CourseDetails/CourseDetails";
import Courses from "../componenets/Courses/Courses";
import ErrorPage from "../componenets/ErrorPage/ErrorPage";
import Faq from "../componenets/FAQ/Faq";

import Main from "../componenets/Main/Main";
import Home from "../componenets/Pages/Home/Home";
import Login from "../componenets/Pages/Login/Login";
import Register from "../componenets/Pages/Register/Register";
import { CourseContext } from "../Context/CourseContext/CourseContext";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";



export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,
errorElement: <ErrorPage></ErrorPage>,
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
    path:'/courses',
    element:<AllCourses></AllCourses>,
   loader: ()=> fetch("https://maxcourses.vercel.app/courses")
},
{
    path:'/courses/:id',
    element:<CourseDetails></CourseDetails>,
   loader: ({params})=> fetch(`https://maxcourses.vercel.app/courses/${params.id}`)
},
{
    path:'/course/:id',
    element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
   loader: ({params})=> fetch(`https://maxcourses.vercel.app/course/${params.id}`)
},
{
    path:'/faq',
    element:<Faq></Faq>,
},
{
    path:'/blog',
    element: <Blog></Blog>,
    loader: () => fetch("https://maxcourses.vercel.app/blog")
},
{
    path:'/blog/:id',
    element:<BlogDetails></BlogDetails>,
    loader: ({params}) => fetch(`https://maxcourses.vercel.app/blog/${params.id}`)
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