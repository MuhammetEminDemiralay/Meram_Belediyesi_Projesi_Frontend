import { Outlet } from "react-router-dom"
import Navbar from "../Components/HomeComponents/Navbar/Navbar"
import './CssLayout/HomeLayout.css'
import BossContact from "../Components/HomeComponents/BossContact/BossContact"
import Projects from "../Components/HomeComponents/PorjectsFolder/Projects/Projects"
import Work from "../Components/HomeComponents/WorksFolder/Works/Work"
import News from "../Components/HomeComponents/NewsFolder/News/News"
import Footer from "../Components/HomeComponents/Footer/Footer"



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
                    <Outlet/>
                </div>
                <BossContact />
                <News/>
                <Projects/>
                <Work/>
                <Footer/>
            </div>
        </div>
    )
}


export default HomeLayout