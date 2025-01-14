import { ActivityList } from "../components/ActivityList/ActivityList"
import { Footer } from "../components/Footer/Footer"
import { Nav } from "../components/Nav/Nav"

export const Activity = () => {
    return(
        <div>
            <Nav/>
            <ActivityList/>
            <Footer/>
        </div>
    )
}