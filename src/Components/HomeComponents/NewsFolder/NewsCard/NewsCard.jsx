import { useNavigate } from 'react-router-dom'
import './NewsCard.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function NewsCard({ item, deleteItem}) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [newBody, setNewBody] = useState()
    const { currentUser } = useSelector(state => state.auth)
    const [currentImage, setCurrentImage] = useState();
    const navi = useNavigate();
    useEffect(() => {
        setNewBody(item.body.slice(0, 75))
        getNewsImage();
    }, [])

    const getNewsImage = async () => {
        const response = await fetch(`https://localhost:44358/api/NewsImage/getnewsimagebynewsıd?newsId=${item.id}`)
        const datas = await response.json();
        setCurrentImage(datas?.data);
        return datas.data
    }

    function handleImage(e) {
        const file = e.target.files;
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('files', file[0])
        }
        formData.append('newsImagePath', file[0].name)
        formData.append('newsId', item.id)

        if (!(item.newsImagePath.length > 0)) {
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
        } else {
            const updateImage = async () => {
                formData.delete("files")
                formData.append("file", file[0])
                formData.append("id", currentImage[0].id)
                const response = await fetch("https://localhost:44358/api/NewsImage/update", {
                    method: "POST",
                    body: formData
                })
                const data = await response.json();
                return data;
            }
            updateImage();
            window.location.reload();
        }
    }

    return (
        <>
            <div className="card-box">
                <img src={item.newsImagePath.length > 0 ? imageUrl + item.newsImagePath[0] : imageUrl + noImage} alt="..." />
                <input onChange={handleImage} className={`display-img ${currentUser.role != "Editör" && "file-visibility"}`} type="file" />
                <div className="newspaper-body">
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi(`news-update/${item.id}`)} className='bx bxs-pencil icon-edit pen'></i>
                    }
                    {
                        currentUser.role == "Editör" && <i onClick={() => deleteItem(item)} className='bx bx-minus icon-edit'></i>
                    }
                    <i onClick={() => navi(`newsdetail/${item.id}`)} className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='newspaper-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )
}

export default NewsCard