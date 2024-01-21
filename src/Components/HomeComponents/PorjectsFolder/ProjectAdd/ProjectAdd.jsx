import { useNavigate } from 'react-router-dom'
import './ProjectAdd'
import { useEffect, useState } from 'react'


function ProjectAdd() {

    const newspaper = "Images/Project.jpg"
    const imageUrl = `https://localhost:44358/`
    const navi = useNavigate()
    const projectModel = { categoryId : 0, title: "", body: "" }
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
        console.log(response);
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
        console.log(e);
        setProject(prev => (
            
            { ...prev, [e.target.id]: e.target.value}
        ))
    }

    return (
        <div className="works-add-container">
            <div className="container work-add-container">
                {/* <img className='work-add-paper' src={imageUrl + newspaper} alt="" /> */}
                <h1>Proje Ekle</h1>
                <form className='form-add' onSubmit={handleSubmit}>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Proje Başlığı</b></label>
                        <input onChange={inputChange} type="text" placeholder="title" id="title" />
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="categoryId"><b>Kategori</b></label>
                        <select id='categoryId'  onChange={inputChange}>
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