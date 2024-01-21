import { useParams } from 'react-router-dom'
import './WorkDetail.css'
import { useEffect, useState } from 'react';

function WorkDetail({ item }) {

    const newspaper = "Images/business.jpg"
    const imageUrl = `https://localhost:44358/`
    const { id } = useParams();
    const noImage = `Images/noImage.jpg`
    const [workDetail, setWorkDetail] = useState([]);

    useEffect(() => {
        getWorkDetail();
        console.log(id);
        console.log(workDetail);
    }, [id])

    const getWorkDetail = async () => {
        const response = await fetch(`https://localhost:44358/api/Work/getworkbyworkid?workId=${id}`)
        const data = await response.json();
        setWorkDetail(data.data);
        console.log(data.data);
        return data;
    }

    return (
        <>
            <div className="works-detail-container">
                <div className="container work-detail-container">
                    <img className='work-detail-paper' src={imageUrl + newspaper} alt="" />
                    <div className="work-detail-images-box">
                        <img src={workDetail.workImagePath ? imageUrl + workDetail.workImagePath : imageUrl + noImage}  alt="..." />
                        <div className="work-detail-body">
                            <h1>{workDetail.title}</h1>
                            <h6>{workDetail.body}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkDetail

