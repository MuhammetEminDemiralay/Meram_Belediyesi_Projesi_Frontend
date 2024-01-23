import { useSelector } from 'react-redux'
import './Home.css'



function Home() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
    return (
        <div className="news-container ">
            <div className="container newspaper-container">

            </div>
        </div>
    )
}

export default Home