import { Children } from "react";
import { Navigate } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard"
import ExerciseLibrary from "./pages/ExerciseLibrary";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import SolutionFor from "./pages/SolutionFor";
import TeleHealth from "./pages/TeleHealth";

const routes = () => [
    {
        path: "/",
        element: <Navigate to="/app/dashboard" />
    },
    {
        path: "app",
        element: <DashboardLayout />,
        children: [
            {path:"dashboard",element:<Dashboard />},
            { path: "ExerciseLibrary", element: <ExerciseLibrary /> },
            { path: "Main", element: <Main /> },
            { path: "Pricing", element: <Pricing /> },
            { path: "SolutionFor", element: <SolutionFor /> },
            { path: "TeleHealth", element: <TeleHealth /> }
        ]
    }
]

export default routes

