import { useParams } from 'react-router-dom';
import './ProjectDetail.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function ProjectDetail() {

    const project = "Images/project.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [projectDetail, setProjectDetail] = useState([]);
    const { currentUser } = useSelector(state => state.auth)


    useEffect(() => {
        getProjectDetail();
    }, [id])

    const getProjectDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/Project/getprojectbyprojectid?projectId=${id}`)
        const data = await response.json();
        setProjectDetail(data.data);
        return data;
    }


    function handleImage(e) {
        const file = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('files', file[0])
        }
        formData.append('projectImagePath', file[0].name)
        formData.append('projectId', projectDetail.id)
        const addImage = async () => {
            const response = await fetch("https://localhost:44358/api/ProjectImage/add", {
                method: "POST",
                body: formData
            })
            const data = await response.json();
            return data;
        }
        addImage();
        window.location.reload();
    }

    return (
        <>
            <div className="projects-detail-container">
                <div className="container project-detail-container">
                    <span className='project-title-big'>PROJE</span>
                    <img className='project-detail-paper' src={imageUrl + project} alt="" />
                    <div className="project-detail-images-box">
                        <div className="img-detail-box">
                            <input onChange={handleImage} className={`display-img-project-detail ${currentUser.role == "Editör" && "visible-img-project-detail"} `} type="file" />
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className='img-detail' src={projectDetail.projectImagePath?.length > 0 ? imageUrl + projectDetail.projectImagePath[0] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={projectDetail.projectImagePath?.length > 1 ? imageUrl + projectDetail.projectImagePath[1] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={projectDetail.projectImagePath?.length > 2 ? imageUrl + projectDetail.projectImagePath[2] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={projectDetail.projectImagePath?.length > 3 ? imageUrl + projectDetail.projectImagePath[3] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={projectDetail.projectImagePath?.length > 4 ? imageUrl + projectDetail.projectImagePath[4] : imageUrl + noImage} alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="project-detail-body">
                            <h1>{projectDetail.title}</h1>
                            <h6>{projectDetail.body}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetail