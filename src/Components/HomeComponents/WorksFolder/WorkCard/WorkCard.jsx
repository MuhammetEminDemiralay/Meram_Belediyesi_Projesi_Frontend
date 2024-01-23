import { useEffect, useState } from 'react'
import './WorkCard.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function WorkCard({ item, deleteItem}) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const [newBody, setNewBody] = useState()
    const {currentUser} = useSelector(state => state.auth);
    const [currentImage, setCurrentImage] = useState();
    const navi = useNavigate();
    useEffect(() => {
        setNewBody(item.body.slice(0, 75))
        getWorkImage();
    }, [])

    
    const getWorkImage = async () => {
        const response = await fetch(`https://localhost:44358/api/WorkImage/getworkimagebyworkıd?workId=${item.id}`)
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
        formData.append('workImagePath', file[0].name)
        formData.append('workId', item.id)

        if (!(item.workImagePath.length > 0)) {
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
        } else {
            const updateImage = async () => {
                formData.delete("files")
                formData.append("file", file[0])
                formData.append("id", currentImage[0].id)
                const response = await fetch("https://localhost:44358/api/WorkImage/update", {
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
                <img src={item.workImagePath.length > 0 ? imageUrl + item.workImagePath[0] : imageUrl + noImage} alt="..." />
                <input onChange={handleImage} className={`display-img ${currentUser.role != "Editör" && "file-visibility"}`} type="file" />
                <div className="work-body">
                    {
                        currentUser.role == "Editör" && <i onClick={() => navi(`work-update/${item.id}`)} className='bx bxs-pencil icon-edit pen'></i>
                    }
                    {
                        currentUser.role == "Editör" && <i onClick={() => deleteItem(item)} className='bx bx-minus icon-edit'></i>
                    }
                    <i onClick={() => navi(`workdetail/${item.id}`)} className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='work-description'>{newBody}<b> . . . </b></p>
                </div>
            </div>
        </>
    )

}

export default WorkCard