import { useEffect, useState } from 'react'
import './ProjectCard.css'
import { useNavigate } from 'react-router-dom'


function ProjectCard({ item}) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [projectBody, setProjectBody] = useState()
    const [newBody, setNewBody] = useState()

    const navi = useNavigate();
    useEffect(() => {
        setProjectBody(item.body.slice(0, 150))
    }, [])

    return (
        <>
            <div className="card-box">
                <img src={item.projectImagePath.length > 0 ? imageUrl + item.projectImagePath[0] : imageUrl + noImage} className="card-img-top" alt="..." />
                <div className="project-body">
                    <i onClick={() => navi(`projectdetail/${item.id}`)} className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='newspaper-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )

}

export default ProjectCard