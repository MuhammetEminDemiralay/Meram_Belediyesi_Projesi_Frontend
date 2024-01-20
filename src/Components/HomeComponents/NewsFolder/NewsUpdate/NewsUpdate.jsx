import { useNavigate, useParams } from 'react-router-dom'
import './NewsUpdate.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function NewsUpdate(){

    const newspaper = "newspaper.jpg"
    const imageUrl = `https://localhost:44358/Images/`
    const navi = useNavigate()
    const newsModel = {id : 0, title : "", body : ""}
    const [news, setNews] = useState(newsModel)
    const {id} = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        updateNews();
    }

    useEffect(() => {
        targetNews()
    },[id])


    const targetNews = async () => {
        if (id) {
            const response = await fetch(`https://localhost:44358/api/News/getnewsbynewsid?newsId=${id}`)
            const datas = await response.json()
            setNews(datas.data)
        }
    }

    const updateNews = async () => {
        const response = await fetch('https://localhost:44358/api/News/update', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(news)
        })
        const data = await response.json()
        if(data.success){
            navi(`/`)
        }
        return data.data
    }

    function inputChange(e){
        setNews(prev => (
            { ...prev, [e.target.id]: e.target.value, id : id}
        ))
    }

    return (
        <div className="news-container ">
            <div className="container newspaper-container">
                <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                <h1>Haber Güncelle</h1>
                <form className='form-add' onSubmit={handleSubmit}>
                    <div className="input-add-box">
                        <label htmlFor="body"><b>Haber başlığı</b></label>
                        <input defaultValue={news?.title}  onChange={inputChange} type="text" placeholder="title" id="title" />
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Açıklama</b></label>
                        <textarea  defaultValue={news?.body}  onChange={inputChange} type="text" placeholder="body" id="body" />
                    </div>
                    <div className="input-add-box">
                        <button type='submit' className="product-add-btn">Haberi Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsUpdate