import { useNavigate } from 'react-router-dom'
import './ProjectAdd.css'
import { useEffect, useState } from 'react'


function ProjectAdd() {

    const projectImage = "Images/Project.jpg"
    const imageUrl = `https://localhost:44358/`
    const navi = useNavigate()
    const projectModel = { categoryId: 0, title: "", body: "" }
    const [project, setProject] = useState(projectModel)
    const [projectCategories, setProjectCategories] = useState([]);


    useEffect(() => {
        getProjectCategories();
    }, [projectCategories])

    function handleSubmit(e) {
        e.preventDefault();
        createProject();
    }

    const createProject = async () => {
        const response = await fetch('https://localhost:44358/api/Project/add', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(project)
        })
        const data = await response.json()
        if (data.success) {
            navi(`/`)
        }
        return data
    }

    const getProjectCategories = async () => {
        const response = await fetch('https://localhost:44358/api/ProjectCategory/getall')
        const data = await response.json();
        setProjectCategories(data.data)
        return data.data
    }

    function inputChange(e) {
        setProject(prev => (

            { ...prev, [e.target.id]: e.target.value }
        ))
    }

    return (
        <div className="projects-add-container">
            <div className="container project-add-container">
                <img className='project-add-paper' src={imageUrl + projectImage} alt="" />
                <form className='form-project-add' onSubmit={handleSubmit}>
                    <h1>Proje Ekle</h1>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Proje Başlığı</b></label>
                        <input onChange={inputChange} type="text" placeholder="title" id="title" />
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
                        <label htmlFor="body"><b>Açıklama</b></label>
                        <textarea onChange={inputChange} type="text" placeholder="body" id="body" />
                    </div>
                    <div className="input-add-box">
                        <button type='submit' className="product-add-btn">Ekle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectAdd