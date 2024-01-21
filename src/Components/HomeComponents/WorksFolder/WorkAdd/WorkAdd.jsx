import { useState } from 'react'
import './WorkAdd.css'
import { useNavigate } from 'react-router-dom'

function WorkAdd() {
    const newspaper = "Images/business.jpg"
    const imageUrl = `https://localhost:44358/`
    const navi = useNavigate()
    const workModel = {title : "", body : ""}
    const [works, setWorks] = useState(workModel)

    function handleSubmit(e) {
        e.preventDefault();
        createWork();
    }

    const createWork = async () => {
        const response = await fetch('https://localhost:44358/api/Work/add', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(works)
        })
        const data = await response.json()
        if(data.success){
            navi(`/`)
        }
        return data
    }
    function inputChange(e){
        setWorks(prev => (
            { ...prev, [e.target.id]: e.target.value}
        ))
    }

    return (
        <div className="works-add-container">
            <div className="container work-add-container">
                {/* <img className='work-add-paper' src={imageUrl + newspaper} alt="" /> */}
                <h1>İş Ekle</h1>
                <form className='form-add' onSubmit={handleSubmit}>
                    <div className="input-add-box">
                        <label htmlFor="body"><b>İş Başlığı</b></label>
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

export default WorkAdd