import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import './CssLayout/HomeLayout.css'
import BossContact from "../Components/BossContact"



function HomeLayout() {

    return (
        <div className="wrapper">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="home-container">
                <div className="container outlet-container">
                    <Outlet />
                </div>
                <BossContact />
            </div>
        </div>
    )
}


export default HomeLayout