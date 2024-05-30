import Login from "../components/Login";
import SignUp from "../components/Signup";
import ResetPassword from "../components/ResetPassword";
import ForgetPassword from "../components/ForgetPassword";
import { Navigate } from "react-router-dom";
import CreateMarkdown from "../components/Createmarkdown"
import Home from "../components/home";
import Dashboard from "../components/Dashboard";
import UpdateMarkdown from "../components/UpdateMarkdown";
import Chart from "../components/Chart";

const AppRoutes = [
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/SignUp",
        element:<SignUp/>
    },
    {
        path:"/resetpassword/:token",
        element:<ResetPassword/>
    },
    {
        path:"/forgetpassword",
        element:<ForgetPassword/>
    },
    {
        path:"/createmarkdown",
        element:<CreateMarkdown/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"*",
        element:<Navigate to='home'/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/updateMarkdown/:id",
        element:<UpdateMarkdown/>
    },
    {
        path:"/chart",
        element:<Chart/>
    }
    
]

export default AppRoutes