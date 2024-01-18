import CompanyProductItem from '../CompanyProductItem/CompanyProductItem'
import './CompanyProducts.css'

function CompanyProducts({ products, deleteProduct, updateProduct, setProductActive, productActive}) {

    return (
        <>
            <ul className='company-products'>
                {
                    products.map(product => (
                        <CompanyProductItem productActive={productActive} setProductActive={setProductActive} updateProduct={updateProduct} deleteProduct={deleteProduct} product={product} key={product.id}/>
                    ))
                }
            </ul>
        </>
    )
}

export default CompanyProducts
