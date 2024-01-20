import { useState } from 'react'
import './NewsAdd.css'
import { useNavigate } from 'react-router-dom'

function NewsAdd() {
    const newspaper = "newspaper.jpg"
    const imageUrl = `https://localhost:44358/Images/`
    const navi = useNavigate()
    const newsModel = {title : "", body : ""}
    const [news, setNews] = useState(newsModel)

    function handleSubmit(e) {
        e.preventDefault();
        createNews();
    }

    const createNews = async () => {
        const response = await fetch('https://localhost:44358/api/News/add', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(news)
        })
        const data = await response.json()
        if(data.success){
            navi(`/`)
        }
        return data
    }
    function inputChange(e){
        setNews(prev => (
            { ...prev, [e.target.id]: e.target.value}
        ))
    }

    return (
        <div className="news-container ">
            <div className="container newspaper-container">
                <img className='newspaper-paper' src={imageUrl + newspaper} alt="" />
                <h1>Haber Ekle</h1>
                <form className='form-add' onSubmit={handleSubmit}>
                    <div className="input-add-box">
                        <label htmlFor="body"><b>Haber Başlığı</b></label>
                        <input onChange={inputChange} type="text" placeholder="title" id="title" />
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Açıklama</b></label>
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

export default NewsAdd