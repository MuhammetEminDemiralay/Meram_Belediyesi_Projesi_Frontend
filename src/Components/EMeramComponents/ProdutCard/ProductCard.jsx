import { useNavigate} from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {

    const imageUrl = `https://localhost:44358/`
    const noImage = `Images/noImage.jpg`
    const navi = useNavigate();


    return (
        <div className='product-card-wrapper'>
            <div className="product-card-image-box">
                <img src={product.productImagePath.length > 0 ? imageUrl + product.productImagePath : imageUrl + noImage} />
            </div>
            <div className="product-card-body-box">
                <div className="body-box">
                    <div className='product-name'>{product.productName}</div>
                    <div className='product-unit-price'>{product.unitPrice}.00TL</div>
                </div>
                <div className="product-btn-box">
                    <i className="bi bi-cart3"></i>
                    <button onClick={() => navi(`/e-meram/product-detail/${product?.id}`)}>detay</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard