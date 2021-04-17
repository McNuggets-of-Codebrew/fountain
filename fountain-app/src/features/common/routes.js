import ProfilePage from "../pages/ProfilePage"; 
import EditWish from "../wish/editWish"; 
import CreateWish from "../wish/CreateWish"; 
import Fountain from "../pages/Fountain"; 
import Dashboard from "../pages/Dashboard"; 

import {dummyWish} from "../wish/dummyWish"; 
export const publicRoutes = [
    {
        path: "/",
        exact: true,
        page: <Fountain/>,
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
    }, 
    {
        path: "/dashboard", 
        exact: true, 
        page: <Dashboard/>
    }
];
