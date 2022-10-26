import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../componenets/AllCourses/AllCourses";
import Blog from "../componenets/Blog/Blog";
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
   loader: ()=> fetch("http://localhost:5000/courses")
},
{
    path:'/courses/:id',
    element:<CourseDetails></CourseDetails>,
   loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
},
{
    path:'/course/:id',
    element:<CheckOut></CheckOut>,
   loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
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