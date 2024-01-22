import { useNavigate, useParams } from 'react-router-dom'
import './WorkUpdate.css'
import { useEffect, useState } from 'react'


function WorkUpdate() {

    const newspaper = "work.jpg"
    const imageUrl = `https://localhost:44358/Images/`
    const navi = useNavigate()
    const workModel = { id: 0, title: "", body: "" }
    const [work, setWork] = useState(workModel)
    const { id } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        updateWork();
    }

    useEffect(() => {
        targetWork()
    }, [id])


    const targetWork = async () => {
        if (id) {
            const response = await fetch(`https://localhost:44358/api/Work/getworkbyworkid?workId=${id}`)
            const datas = await response.json()
            setWork(datas.data)
        }
    }

    const updateWork = async () => {
        const response = await fetch('https://localhost:44358/api/Work/update', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(work)
        })
        const data = await response.json()
        if (data.success) {
            navi(`/`)
        }
        return data.data
    }

    function inputChange(e) {
        setWork(prev => (
            { ...prev, [e.target.id]: e.target.value, id: id }
        ))
    }

    return (
        <div className="works-update-container ">
            <div className="container work-update-container">
                <img className='work-update-paper' src={imageUrl + newspaper} alt="" />
                <form className='form-work-update' onSubmit={handleSubmit}>
                    <h1>İş Güncelle</h1>
                    <div className="input-add-box">
                        <label htmlFor="body"><b>İş başlığı</b></label>
                        <input defaultValue={work?.title} onChange={inputChange} type="text" placeholder="title" id="title" />
                    </div>
                    <div className="input-add-box">
                        <label htmlFor="title"><b>Açıklama</b></label>
                        <textarea defaultValue={work?.body} onChange={inputChange} type="text" placeholder="body" id="body" />
                    </div>
                    <div className="input-add-box">
                        <button type='submit' className="product-add-btn">İşi Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkUpdate