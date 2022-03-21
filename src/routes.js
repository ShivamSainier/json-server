import { Children } from "react";
import { Navigate } from "react-router";
// import DashboardLayout from "./layout/DashboardLayout";
import HeaderFooterLayout from "./layout/HeaderFooterLayout/HeaderFooterLayout";
import Dashboard from "./pages/Dashboard"
import ExerciseLibrary from "./pages/ExerciseLibrary";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import SolutionFor from "./pages/SolutionFor";
import TeleHealth from "./pages/TeleHealth";

////// Login //////////
import Login from "./pages/auth/Login";
import ForgotPassword from './pages/auth/ForgotPassword';
import NotFound from './pages/NotFound';

const routes = () => [
    {
        path: "/",
        element: <Navigate to="/app/dashboard" />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'reset-password', element: <ForgotPassword /> },
            { path: '404', element: <NotFound /> },
            { path: '/', element: <Navigate to="/login" /> },
            { path: '*', element: <Navigate to="/404" /> },
        ]
    },
    {
        path: "app",
        element: <HeaderFooterLayout />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "ExerciseLibrary", element: <ExerciseLibrary /> },
            { path: "Main", element: <Main /> },
            { path: "Pricing", element: <Pricing /> },
            { path: "SolutionFor", element: <SolutionFor /> },
            { path: "TeleHealth", element: <TeleHealth /> }
        ]
    },
]

export default routes

