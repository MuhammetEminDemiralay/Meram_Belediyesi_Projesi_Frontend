import { useSelector } from 'react-redux'
import './Home.css'
import { Outlet } from 'react-router-dom';



function Home() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
    const imageUrl = `https://localhost:44358/Images/`
    const meramImage = "Meram.jpg"

    return (
        <div className="homes-container ">
            <div className="container home-container">
                <div className='transparent-image'></div>
                {/* <span className='home-title-big'>Tevazu, Samimiyet ve Gayretle</span> */}
                <div className='home-search-box'>
                    <input type="text" placeholder='Şimdi ara . . .' />
                    <i className="bi bi-search search"></i>
                    <div className="bottom-btn">
                        
                    </div>
                </div>
                <img className='newspaper-paper' src={imageUrl + meramImage} alt="" />

                <Outlet />
            </div>
        </div>
    )
}

export default Home