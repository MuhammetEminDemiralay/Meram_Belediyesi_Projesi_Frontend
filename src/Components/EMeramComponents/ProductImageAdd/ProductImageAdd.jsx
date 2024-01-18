import { useEffect, useState } from 'react';
import './ProductImageAdd.css'

function ProductImageAdd({ productUpdateModel }) {

    const imageUrl = `https://localhost:44358/Images/`
    const noImage = `noImage.jpg`
    const [image, setImage] = useState();
    const [selectedImage, setSelectedImage] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', image[0]);
        formData.append('productId', `${productUpdateModel?.id}`);
        formData.append('productImagePath', image[0].name)
        const imageAdd = async () => {
            const response = await fetch('https://localhost:44358/api/ProductImage/add', {
                method: "POST",
                body: formData
            })
            const datas = await response.json();
            return datas.data
        }
        imageAdd();
        window.location.reload()
    }

    function inputChange(e) {
        setImage(prev => e.target.files)
        const fileUrl = URL.createObjectURL(e.target.files[0]);
        setSelectedImage(fileUrl)
    }

    return (
        <div className='wrapper-selected-image'>
            <div className="selected-image-box">
                <img src={selectedImage ? selectedImage : imageUrl + noImage} width={50} className='selected-image' />
            </div>

            <form className='image-add-form' onSubmit={handleSubmit}>
                <input onChange={inputChange} type="file" />
                <button className='image-add-btn' type='submit'>Resim ekle</button>
            </form>
        </div>
    )
}

export default ProductImageAdd 