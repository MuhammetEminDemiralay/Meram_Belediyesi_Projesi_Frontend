import { Outlet } from "react-router-dom"
import Navbar from "../Components/HomeComponents/Navbar"
import './CssLayout/HomeLayout.css'
import BossContact from "../Components/HomeComponents/BossContact"
import News from "../Components/HomeComponents/News"
import Projects from "../Components/HomeComponents/Projects"



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
            </div>
        </div>
    )
}


export default HomeLayout