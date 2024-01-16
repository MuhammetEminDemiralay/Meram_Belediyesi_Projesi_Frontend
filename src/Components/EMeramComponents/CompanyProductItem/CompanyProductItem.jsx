import './CompanyProductItem.css'

function CompanyProductItem({ product, deleteProduct, updateProduct}) {

    const imageUrl = "http://localhost:5173/"
    return (
        <div className='company-product'>
            {/* <img src={product.imagePath.length > 0 ? } alt="" /> */}
            <img className='product-company-list-img' src="" alt="" />
            <div className='info'>
                <li><b>Ürün ismi : </b> {product.productName}</li>
                <li><b>Categori : </b>{product.categoryName}</li>
                <li><b>Birim fiyatı : </b>{product.unitPrice}</li>
                <li><b>Stok adedi : </b>{product.unitsInStock}</li>
                <li><b>Ürün detayı : </b>{product.description}</li>
            </div>
            <div className='btn-box'>
                <i className="bi bi-pencil-fill icon" onClick={() => updateProduct(product.id)}></i>
                <i className="bi bi-dash-lg icon" onClick={() => deleteProduct(product.id)}></i>
            </div>
        </div>
    )
}

export default CompanyProductItem