import { useParams } from 'react-router-dom';
import './ProjectDetail.css'
import { useEffect, useState } from 'react';


function ProjectDetail() {

    const newspaper = "Images/project.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [projectDetail, setProjectDetail] = useState([]);

    useEffect(() => {
        getProjectDetail();
        console.log(id);
        console.log(projectDetail);
    }, [id])

    const getProjectDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/Project/getprojectbyprojectid?projectId=${id}`)
        const data = await response.json();
        setProjectDetail(data.data);
        console.log(data.data);
        return data;
    }

    return (
        <>
            <div className="news-container">
                <div className="container newspaper-container">
                    <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                    <div className="news-images-box">
                        <img src={projectDetail.projectImagePath ? imageUrl + projectDetail.projectImagePath : imageUrl + noImage} className="d-block w-100" alt="..." />
                        <div className="news-body">
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