import { useState } from 'react';
import './ProductImageAdd.css'

function ProductImageAdd({ productUpdateModel }) {


    const [image, setImage] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < image.files.length; i++) {
            formData.append('files', image.files[i]);
        }
        formData.append('productId', `${productUpdateModel?.id}`);
        formData.append('ProductImagePath', 'ae2abe2f13b34e43b63f2f4e10fda537.jpg')
        const imageAdd = async () => {
            const response = await fetch('https://localhost:44358/api/ProductImage/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            const datas = await response.json();
            console.log(response);
            console.log(datas);
            return datas
        }
        imageAdd();
    }

    function inputChange(e) {
        setImage([e.target.files])
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                {productUpdateModel?.id}
                <input onChange={inputChange} type="file" />
                <button type='submit'>Resim ekle</button>
            </form>
        </>
    )
}

export default ProductImageAdd 