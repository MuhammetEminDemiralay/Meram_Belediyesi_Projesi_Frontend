import { useEffect, useState } from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';


function Projects() {

    const newspaper = "project.jpg"
    const imageUrl = `https://localhost:44358/Images/`

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const response = await fetch('https://localhost:44358/api/Project/getall');
        const data = await response.json();
        setProjects(data.data)
        return data.data
    }

    return (
        <div className="projects-container">
            <div className="container project-container">
                <img className='project-paper' src={imageUrl + newspaper} alt="" />
                <div className="project-navbar">
                    <i className='bx bx-news'></i>
                    <span className='meram-projects'>Meram Projeler</span>
                </div>
                <ul className='project-box'>
                    {
                        projects.map(item => <ProjectCard key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects