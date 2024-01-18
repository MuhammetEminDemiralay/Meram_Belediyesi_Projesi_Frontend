import { useSelector } from 'react-redux'
import './Home.css'
import { useEffect } from 'react';




function Home() {
    
    const {currentUser, isAuth} = useSelector(state => state.auth);
    return (
        <div className="home-container">
            <div className="container p-0">
                <div className="home">
                    <h1>home</h1>
                    {currentUser.id}
                </div>
            </div>
        </div>
    )
}

export default Home