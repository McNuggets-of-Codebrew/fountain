import {dummyProfile} from "../profile/dummyProfile"; 
import TopNav from "../components/TopNav"; 
import Profile from "../profile/Profile"; 

export default function ProfilePage() {
    return(
        <div>
            <TopNav/>
            <div className = "profile-container">
            <div className="heading">PROFILE</div>
            <Profile profile={dummyProfile}/>
            </div>
        </div>
    )
}