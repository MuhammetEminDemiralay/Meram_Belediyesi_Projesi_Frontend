import { Outlet } from "react-router-dom"
import Navbar from "../Components/HomeComponents/Navbar/Navbar"
import './CssLayout/HomeLayout.css'
import BossContact from "../Components/HomeComponents/BossContact/BossContact"
import Projects from "../Components/HomeComponents/Projects/Projects"
import Work from "../Components/HomeComponents/Work/Work"
import News from "../Components/HomeComponents/NewsFolder/News/News"



function HomeLayout() {

    return (
        <div className="wrapper">
            <div className="navbar">
                <div className="container">
                    <Navbar />
                </div>
            </div>
            <div className="home-container">
                <div className="container outlet-container">
                    <Outlet />
                </div>
                <BossContact />
                <News/>
                <Projects/>
                <Work/>
            </div>
        </div>
    )
}


export default HomeLayout