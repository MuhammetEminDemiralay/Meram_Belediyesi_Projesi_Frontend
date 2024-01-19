import { useEffect, useState } from 'react';
import './News.css'
import NewsCard from '../NewsCard/NewsCard';

function News() {

    const newspaper = "newspaper.jpg"
    const imageUrl = `https://localhost:44358/Images/`

    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const response = await fetch('https://localhost:44358/api/News/getall');
        const data = await response.json();
        setNews(data.data)
        console.log(data.data);
        return data.data
    }

    return (
        <div className="news-container">
            <div className="container newspaper-container">
                <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                <div className="newspaper-navbar">
                    <i className='bx bx-news'></i>
                    <span className='meram-newspaper'>Meram Gazetesi</span>
                </div>
                <ul className='newspaper-box'>
                    {
                        news.map(item => <NewsCard key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default News

