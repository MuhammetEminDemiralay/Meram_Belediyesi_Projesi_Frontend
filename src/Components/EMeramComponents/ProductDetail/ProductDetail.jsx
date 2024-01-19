import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useEffect, useState } from 'react';


function ProductDetail() {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        productDetail()
    }, [id])

    const productDetail = async () => {
            const response = await fetch(`https://localhost:44358/api/Product/getproductbyproductid?productId=${id}`)
            const datas = await response.json()
            setProduct(datas.data)
            console.log(datas.data);
            return datas

    }



    return (
        <div className='product-detail-wrapper'>
            <div className="container product-detail-container">
                <div className="product-detail-row">
                    <div className="product-detail-img-box">
                        <img src={product.productImagePath ? imageUrl + product.productImagePath : imageUrl + noImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail