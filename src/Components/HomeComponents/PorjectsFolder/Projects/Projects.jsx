import { useEffect, useState } from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCategory from '../ProjectCategory/ProjectCategory';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Projects() {

    const newspaper = "project.jpg"
    const imageUrl = `https://localhost:44358/Images/`

    const [projects, setProjects] = useState([]);
    const [projectCategories, setProjectCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const { currentUser } = useSelector(state => state.auth)
    const navi = useNavigate();


    useEffect(() => {
        getProjects()
        getProjectCategories()
        console.log(categoryId);
    }, [categoryId])

    const getProjects = async () => {
        const response = await fetch(`https://localhost:44358/api/Project/getprojectbycategoryid?categoryId=${categoryId}`);
        const data = await response.json();
        setProjects(data.data)
        console.log(data);
        return data.data
    }

    const getProjectCategories = async () => {
        const response = await fetch('https://localhost:44358/api/ProjectCategory/getall')
        const data = await response.json();
        setProjectCategories(data.data)
        return data.data
    }





    return (
        <div className="projects-container">
            <div className="container project-container">
                <img className='project-paper' src={imageUrl + newspaper} alt="" />
                <div className="project-navbar">
                    <i className='bx bx-news'></i>
                    <span className='meram-projects'>Meram Projeler</span>
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi("project-add")} className='bx bx-plus icon-edit'></i>
                    }
                </div>
                <ul className='project-box'>
                    <div className='project-category'>
                        {
                            projectCategories.map(item => <ProjectCategory key={item.id} setCategoryId={setCategoryId} item={item} />)
                        }
                    </div>
                    {
                        projects.map(item => <ProjectCard key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects