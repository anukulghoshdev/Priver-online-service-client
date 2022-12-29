import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 

            {
                path: '/signup', 
                element: <SignUp></SignUp>
            },

            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            
            {
                path:'/allservices',
                element: <AllServices></AllServices>
            },

            {
                path:'/services/:id',
                loader: ({params})=>fetch(`https://ass-10-server-plum.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },

            {
                path:'/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }, 

            {
                path: '/updateReview/:id',
                loader: ({params})=>fetch(`https://ass-10-server-plum.vercel.app/myreviews/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    
])
export default router;

// https://ass-10-server-plum.vercel.app

// https://ass-10-server-plum.vercel.app