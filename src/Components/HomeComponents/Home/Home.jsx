import { useSelector } from 'react-redux'
import './Home.css'



function Home() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
    return (
        <div className="homes-container ">
            <div className="container home-container">
                {/* <img className='newspaper-paper' src={imageUrl + newspaper} alt="" /> */}

            </div>
        </div>
    )
}

export default Home