import UserNav from "../components/UserNav";
import DashboardWish from "../wish/DashboardWish"; 
import { dummyWish } from "../wish/dummyWish";

export default function Dashboard() {
    return(
        <div>
        <UserNav/>
        {dummyWish.map((wish, index)=> <DashboardWish wish={wish} key={index}/>)}
        </div>
    )
}