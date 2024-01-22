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
    const [categoryId, setCategoryId] = useState(7);
    const { currentUser } = useSelector(state => state.auth)
    const navi = useNavigate();


    useEffect(() => {
        getProjectCategories()
        getProjects()
    }, [categoryId])

    const getProjects = async () => {
        const response = await fetch(`https://localhost:44358/api/Project/getprojectbycategoryid?categoryId=${categoryId}`);
        const data = await response.json();
        setProjects(data.data)
        return data.data
    }

    const getProjectCategories = async () => {
        const response = await fetch('https://localhost:44358/api/ProjectCategory/getall')
        const data = await response.json();
        setProjectCategories(data.data)
        return data.data
    }

    function deleteItem(item) {
        if (window.confirm("Silmek istediğine emin misin?")) {
            const deleteProject = async (project) => {
                const response = await fetch('https://localhost:44358/api/Project/delete', {
                    method: 'POST',
                    headers: { 'Content-Type': 'Application/json' },
                    body: JSON.stringify(item)
                })
                const data = await response.json()
                return data
            }
            deleteProject()
            window.location.reload();
        }
    }



    return (
        <div className="projects-container">
            <div className="container project-container">
                <img className='project-paper' src={imageUrl + newspaper} alt="" />
                <div className="project-navbar">
                    <i className='bx bx-building-house'></i>
                    <span className='project-title'>Meram Projeler</span>
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
                        projects.map(item => <ProjectCard deleteItem={deleteItem} key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects