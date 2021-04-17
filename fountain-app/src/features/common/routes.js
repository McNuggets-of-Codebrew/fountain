import Landing from "../pages/Landing"; 
import About from "../pages/About"; 
import ProfilePage from "../pages/ProfilePage"; 
import EditWish from "../wish/EditWish"; 
import CreateWish from "../wish/CreateWish"; 
import Fountain from "../pages/Fountain"; 

import {dummyWish} from "../wish/dummyWish"; 
export const publicRoutes = [
    {
        path: "/",
        exact: true,
        page: <Fountain/>,
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
    {
        path: "/test", 
        exact: true, 
        page: <EditWish wish = {dummyWish[0 ]}/>
    }, 
    { 
        path: "/test2", 
        exact: true, 
        page: <CreateWish/>
    }
];
