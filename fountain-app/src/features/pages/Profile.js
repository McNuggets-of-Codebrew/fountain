import {dummyProfile} from "../profile/dummyProfile"; 
import TopNav from "../components/TopNav"; 
import Profile from "../profile/Profile"; 

export default function Profile() {
    return(
        <div>
            <TopNav/>
            Profile
            <Profile profile={dummyProfile}/>
        </div>
    )
}