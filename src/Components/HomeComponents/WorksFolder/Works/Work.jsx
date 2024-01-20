import { useEffect, useState } from 'react';
import './Work.css'
import WorkCard from '../WorkCard/WorkCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Work() {

    const newspaper = "business.jpg"
    const imageUrl = `https://localhost:44358/Images/`
    const { currentUser } = useSelector(state => state.auth)
    const navi = useNavigate()

    const [works, setWorks] = useState([]);

    useEffect(() => {
        getWorks()
    }, [])

    const getWorks = async () => {
        const response = await fetch('https://localhost:44358/api/Work/getall');
        const data = await response.json();
        setWorks(data.data)
        return data.data
    }

    return (
        <div className="works-container">
            <div className="container work-container">
                <img className='work-paper' src={imageUrl + newspaper} alt="" />
                <div className="work-navbar">
                    <i className='bx bx-news'></i>
                    <span className='meram-work'>İş İlanlar</span>
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi("work-add")} className='bx bx-plus icon-edit'></i>
                    }
                </div>
                <ul className='work-box'>
                    {
                        works.map(item => <WorkCard key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Work