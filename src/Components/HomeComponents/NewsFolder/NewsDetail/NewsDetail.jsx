import { useParams } from 'react-router-dom'
import './NewsDetail.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function NewsDetail() {

    const newspaper = "Images/newspap.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [newsDetail, setNewsDetail] = useState({});
    const { currentUser } = useSelector(state => state.auth)


    useEffect(() => {
        getNewsDetail();
        console.log(newsDetail);
    }, [id])

    const getNewsDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/News/getnewsbynewsid?newsId=${id}`)
        const data = await response.json();
        setNewsDetail(data.data);
        console.log(response);
        console.log(data.data);
        return data;
    }

    function handleImage(e) {
        const file = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('files', file[0])
        }
        formData.append('newsImagePath', file[0].name)
        formData.append('newsId', newsDetail.id)
        const addImage = async () => {
            const response = await fetch("https://localhost:44358/api/NewsImage/add", {
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
            <div className="news-detail-container">
                <div className="container newspaper-detail-container">
                    <span className='news-title-big'>HABER</span>
                    <img className='newspaper-detail-paper' src={imageUrl + newspaper} alt="" />
                    <div className="news-detail-images-box">
                        <div className="img-detail-box">
                            <input onChange={handleImage} className={`display-img-news-detail ${currentUser.role == "Editör" && "visible-img-project-detail"} `} type="file" />
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className='img-detail' src={newsDetail.newsImagePath?.length > 0 ? imageUrl + newsDetail.newsImagePath[0] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={newsDetail.newsImagePath?.length > 1 ? imageUrl + newsDetail.newsImagePath[1] : imageUrl + noImage} alt="..." />

                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={newsDetail.newsImagePath?.length > 2 ? imageUrl + newsDetail.newsImagePath[2] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={newsDetail.newsImagePath?.length > 3 ? imageUrl + newsDetail.newsImagePath[3] : imageUrl + noImage} alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='img-detail' src={newsDetail.newsImagePath?.length > 4 ? imageUrl + newsDetail.newsImagePath[4] : imageUrl + noImage} alt="..." />
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
                        <div className="news-detail-body">
                            <h1>{newsDetail.title}</h1>
                            <h6>{newsDetail.body}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsDetail

