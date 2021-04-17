import Fountain from "../pages/Fountain"; 
import Dashboard from "../pages/Dashboard"; 

export const publicRoutes = [
    {
        path: "/",
        exact: true,
        page: <Fountain/>,
    },
    {
        path: "/dashboard", 
        exact: true, 
        page: <Dashboard/>
    }
];
