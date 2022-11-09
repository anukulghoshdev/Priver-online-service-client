import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element: <AddServices></AddServices>
            },
            {
                path:'/allservices',
                element: <AllServices></AllServices>
            }
        ]
    }
])
export default router;