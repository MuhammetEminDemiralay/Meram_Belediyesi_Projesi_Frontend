import { useEffect, useState } from 'react'
import './WorkCard.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function WorkCard({ item, deleteItem}) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [newBody, setNewBody] = useState()
    const {currentUser} = useSelector(state => state.auth);
    const navi = useNavigate();
    useEffect(() => {
        setNewBody(item.body.slice(0, 150))
    }, [])

    return (
        <>
            <div className="card-box">
                <img src={item.workImagePath.length > 0 ? imageUrl + item.workImagePath[0] : imageUrl + noImage} alt="..." />
                <div className="work-body">
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi(`work-update/${item.id}`)} className='bx bxs-pencil icon-edit pen'></i>
                    }
                    {
                        currentUser.role == "Editör" && <i onClick={() => deleteItem(item)} className='bx bx-minus icon-edit'></i>
                    }
                    <i onClick={() => navi(`workdetail/${item.id}`)} className="bi bi-info-circle-fill work-info"></i>
                    <h3>{item.title}</h3>
                    <p className='work-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )

}

export default WorkCard