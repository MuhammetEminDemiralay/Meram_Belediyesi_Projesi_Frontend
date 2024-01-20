import { useSelector } from 'react-redux'
import './Home.css'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';




function Home() {
    
    const {currentUser, isAuth} = useSelector(state => state.auth);
    return (
        <div className="home-container">
            <div className="container p-0">
                <div className="home">
                </div>
            </div>
        </div>
    )
}

export default Home