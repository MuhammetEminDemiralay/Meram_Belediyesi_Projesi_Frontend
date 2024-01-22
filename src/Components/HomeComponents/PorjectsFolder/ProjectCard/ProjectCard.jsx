import { useEffect, useState } from 'react'
import './ProjectCard.css'
import { json, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function ProjectCard({ item, deleteItem }) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [newBody, setNewBody] = useState()
    const { currentUser } = useSelector(state => state.auth)
    const [currentImage, setCurrentImage] = useState({});
    const navi = useNavigate();

    useEffect(() => {
        setNewBody(item.body.slice(0, 150))
        console.log(currentImage);
    }, [])

    function handleImage(e) {
        const file = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('files', file[0])
        }
        formData.append('projectImagePath', file[0].name)
        formData.append('projectId', item.id)

        if (!(item.projectImagePath.length > 0)) {
            console.log("ekleme");
            const addImage = async () => {
                const response = await fetch("https://localhost:44358/api/ProjectImage/add", {
                    method: "POST",
                    body: formData
                })
                const data = response.json();
                return data;
            }
            addImage();
        } else {
            const getProjectImage = async () => {
                const response = await fetch(`https://localhost:44358/api/ProjectImage/getprojectimagebyprojectid?projectId=${item.id}`)
                const datas = await response.json();
                setCurrentImage(datas.data);
                return datas.data
            }
            getProjectImage();
            const updateImage = async () => {
                formData.append("id", currentImage.id)
                const response = await fetch("https://localhost:44358/api/ProjectImage/update", {
                    method: "POST",
                    body: formData
                })
                const data = response.json();
                return data;
            }
            updateImage();
        }
    }


    return (
        <>
            <div className="card-box">
                <img src={item.projectImagePath.length > 0 ? imageUrl + item.projectImagePath[0] : imageUrl + noImage} alt="..." />
                <input onChange={handleImage} className={`display-img ${currentUser.role != "Editör" && "file-visibility"}`} type="file" />
                <div className="project-body">
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi(`project-update/${item.id}`)} className='bx bxs-pencil icon-edit pen'></i>
                    }
                    {
                        currentUser.role == "Editör" && <i onClick={() => deleteItem(item)} className='bx bx-minus icon-edit'></i>
                    }
                    <i onClick={() => navi(`projectdetail/${item.id}`)} className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='newspaper-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )

}

export default ProjectCard