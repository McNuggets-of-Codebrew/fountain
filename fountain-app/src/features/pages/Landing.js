import TopNav from "../components/TopNav"; 
import Wish from "../wish/Wish"; 
import {dummyWish} from "../wish/dummyWish"; 

export default function Landing() {
    
    return(
        <div>
            <TopNav/>
            {dummyWish.map((wish, index)=><div><Wish wish = {wish} key={index}/></div>)}
        </div>
    )
}