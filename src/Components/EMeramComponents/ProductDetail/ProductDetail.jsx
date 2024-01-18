import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function ProductDetail(){

    const { id } = useParams();
    const [product, setProduct] = useState() 

    useEffect(() => {
        productDetail()
    },[])

    const productDetail = async () => {
        
            const response = await fetch(`https://localhost:44358/api/Product/getproductbyproductid?productId=${id}`)
            const datas = await response.json()
            setProduct(datas.data)
        
    }



    return(
        <div className='product-detail-wrapper'>
            {id}
            <div className="container product-detail-container">
                <div className="product-detail-row">
                    <div className="product-detail-img-box">
                        <span>{product.id}</span>    
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ProductDetail