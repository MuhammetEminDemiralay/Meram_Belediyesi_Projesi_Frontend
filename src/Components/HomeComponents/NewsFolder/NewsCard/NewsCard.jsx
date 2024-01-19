import './NewsCard.css'

function NewsCard({ item }) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`

    return (
        <>
            <div className="card-box">
                <img src={item.newsImagePath.length > 0 ? imageUrl + item.newsImagePath : imageUrl + noImage} className="card-img-top" alt="..." />
                <div className="newspaper-body">
                    <i className="bi bi-info-circle-fill newspaper-info"></i>
                    <h3>{item.title}</h3>
                    <p className='newspaper-description'>{item.body}</p>
                </div>
            </div>

        </>
    )
}

export default NewsCard