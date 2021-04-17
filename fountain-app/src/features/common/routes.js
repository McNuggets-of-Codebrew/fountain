import Landing from "../pages/Landing"; 
import About from "../pages/About"; 
import ProfilePage from "../pages/ProfilePage"; 

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
    }, 
    {
        path: "/profile",
        exact: true,
        page: <ProfilePage/>
      }, 
];
