import { useParams } from 'react-router-dom'
import './WorkDetail.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function WorkDetail({ item }) {

    const workImage = "Images/work.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [workDetail, setWorkDetail] = useState([]);
    const {currentUser} = useSelector(state => state.auth)

    useEffect(() => {
        getWorkDetail();
    }, [id])

    const getWorkDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/Work/getworkbyworkid?workId=${id}`)
        const data = await response.json();
        setWorkDetail(data.data);
        return data;
    }

    
    function handleImage(e) {
        const file = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('files', file[0])
        }
        formData.append('workImagePath', file[0].name)
        formData.append('workId', workDetail.id)
        const addImage = async () => {
            const response = await fetch("https://localhost:44358/api/WorkImage/add", {
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
            <div className="works-detail-container">
                <div className="container work-detail-container">
                    <span className='work-title-big'>İŞ İLANI</span>
                    <img className='work-detail-paper' src={imageUrl + workImage} alt="" />
                    <div className="work-detail-images-box">
                        <div className="img-detail-box">
                            <input onChange={handleImage} className={`display-img-work-detail ${currentUser.role == "Editör" && "visible-img-work-detail"} `} type="file" />
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className='img-detail' src={workDetail.workImagePath?.length > 0 ? imageUrl + workDetail.workImagePath[0] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={workDetail.workImagePath?.length > 1 ? imageUrl + workDetail.workImagePath[1] : imageUrl + noImage} alt="..." />

                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={workDetail.workImagePath?.length > 2 ? imageUrl + workDetail.workImagePath[2] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={workDetail.workImagePath?.length > 3 ? imageUrl + workDetail.workImagePath[3] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={workDetail.workImagePath?.length > 4 ? imageUrl + workDetail.workImagePath[4] : imageUrl + noImage} alt="..." />
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
                        <div className="work-detail-body">
                            <h1>{workDetail.title}</h1>
                            <h6>{workDetail.body}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkDetail

