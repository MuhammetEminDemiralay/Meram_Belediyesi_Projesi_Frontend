import { useNavigate } from 'react-router-dom'
import './NewsCard.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function NewsCard({ item, deleteItem}) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [newBody, setNewBody] = useState()
    const { currentUser } = useSelector(state => state.auth)
    const navi = useNavigate();
    useEffect(() => {
        setNewBody(item.body.slice(0, 150))
    }, [])

    return (
        <>
            <div className="card-box">
                <img src={item.newsImagePath.length > 0 ? imageUrl + item.newsImagePath[0] : imageUrl + noImage} alt="..." />
                <div className="newspaper-body">
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi(`news-update/${item.id}`)} className='bx bxs-pencil icon-edit pen'></i>
                    }
                    {
                        currentUser.role == "Editör" && <i onClick={() => deleteItem(item)} className='bx bx-minus icon-edit'></i>
                    }
                    <i onClick={() => navi(`newsdetail/${item.id}`)} className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='newspaper-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )
}

export default NewsCard