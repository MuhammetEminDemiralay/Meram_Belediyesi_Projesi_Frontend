import { useEffect, useState } from 'react';
import './News.css'
import NewsCard from '../NewsCard/NewsCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function News() {

    const newspaper = "newspap.jpg"
    const imageUrl = `https://localhost:44358/Images/`
    const { currentUser } = useSelector(state => state.auth)
    const navi = useNavigate()
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const response = await fetch('https://localhost:44358/api/News/getall');
        const data = await response.json();
        setNews(data.data)
        return data.data
    }
    
    function deleteItem(item) {
        if (window.confirm("Silmek istediğine emin misin?")) {
            const deleteNews = async (news) => {
                const response = await fetch('https://localhost:44358/api/News/delete', {
                    method: 'POST',
                    headers: { 'Content-Type': 'Application/json' },
                    body: JSON.stringify(item)
                })
                const data = await response.json()
                return data
            }
            deleteNews()
            window.location.reload();
        }
    }




    return (
        <div className="news-container ">
            <div className="container newspaper-container">
                <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                <div className="newspaper-navbar">
                    <i className='bx bx-news'></i>
                    <span className='meram-newspaper'>MERAM GAZETESİ</span>
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi("news-add")} className='bx bx-plus icon-edit'></i>
                    }
                </div>
                <ul className='newspaper-box'>
                    {
                        news.map(item => <NewsCard deleteItem={deleteItem} key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default News

