import { useParams } from 'react-router-dom'
import './NewsDetail.css'
import { useEffect, useState } from 'react';

function NewsDetail({ item }) {

    const newspaper = "Images/newspaper.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [newsDetail, setNewsDetail] = useState([]);

    useEffect(() => {
        getNewsDetail();
        console.log(id);
        console.log(newsDetail);
    }, [id])

    const getNewsDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/News/getnewsbynewsid?newsId=${id}`)
        const data = await response.json();
        setNewsDetail(data.data);
        console.log(data.data);
        return data;
    }

    return (
        <>
            <div className="news-container">
                <div className="container newspaper-container">
                    <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                    <div className="news-images-box">
                        <img src={newsDetail.newsImagePath ? imageUrl + newsDetail.newsImagePath : imageUrl + noImage} className="d-block w-100" alt="..." />
                        <div className="news-body">
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

