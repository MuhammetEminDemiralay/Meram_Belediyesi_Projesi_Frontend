import { useNavigate, useParams } from 'react-router-dom'
import './ProjectUpdate.css'
import { useEffect, useState } from 'react'


function ProjectUpdate() {
    const newspaper = "Images/project.jpg"
    const imageUrl = `https://localhost:44358//`
    const noImage = "noImage.jpg"
    const navi = useNavigate()
    const projectModel = { id: 0, categoryId: 0, title: "", body: "" }
    const [project, setProject] = useState(projectModel)
    const { id } = useParams();
    const [projectCategories, setProjectCategories] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        updateProject();
    }

    useEffect(() => {
        targetProject();
        getProjectCategories()
        console.log(id);
    }, [id])

    const targetProject = async () => {
        if (id) {
            const response = await fetch(`https://localhost:44358/api/Project/getprojectbyprojectid?projectId=${id}`)
            const datas = await response.json()
            console.log(datas);
            setProject(datas.data)
        }
    }

    const updateProject = async () => {
        const response = await fetch('https://localhost:44358/api/Project/update', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(project)
        })
        const data = await response.json()
        if (data.success) {
            navi(`/`)
        }
        return data.data
    }

    const getProjectCategories = async () => {
        const response = await fetch('https://localhost:44358/api/ProjectCategory/getall')
        const data = await response.json();
        setProjectCategories(data.data)
        return data.data
    }


    function inputChange(e) {
        setProject(prev => (
            { ...prev, [e.target.id]: e.target.value, id: id }
        ))
    }

    return (
        <div className="projects-update-container ">
            <div className="container project-update-container">
                <img className='project-update-paper' src={imageUrl + newspaper} alt="" />
                <form className='form-project-update' onSubmit={handleSubmit}>
                    <h1>Proje Güncelle</h1>
                    <div className="input-add-box">
                        <label htmlFor="body"><b>Proje başlığı</b></label>
                        <input defaultValue={project?.title} onChange={inputChange} type="text" placeholder="title" id="title" />
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="categoryId"><b>Kategori</b></label>
                        <select id='categoryId' onChange={inputChange}>
                            {
                                projectCategories.map(category => (
                                    <option value={category.id} key={category.id} >{category.categoryName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Açıklama</b></label>
                        <textarea defaultValue={project?.body} onChange={inputChange} type="text" placeholder="body" id="body" />
                    </div>
                    <div className="input-add-box">
                        <button type='submit' className="product-add-btn">Projeyi Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectUpdate