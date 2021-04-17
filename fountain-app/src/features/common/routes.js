import Landing from "../pages/Landing"; 
import About from "../pages/About"; 

export const publicRoutes = [
    {
      path: "/",
      exact: true,
      page: <Landing/>,
    },
    {
      path: "/about",
      exact: true,
      page: <About/>
    }
];
