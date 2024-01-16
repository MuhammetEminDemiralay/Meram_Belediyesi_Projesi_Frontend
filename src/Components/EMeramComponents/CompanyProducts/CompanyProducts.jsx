import CompanyProductItem from '../CompanyProductItem/CompanyProductItem'
import './CompanyProducts.css'

function CompanyProducts({ products, deleteProduct, updateProduct}) {

    return (
        <>
            <ul className='company-products'>
                {
                    products.map(product => (
                        <CompanyProductItem updateProduct={updateProduct} deleteProduct={deleteProduct} product={product} key={product.id}/>
                    ))
                }
            </ul>
        </>
    )
}

export default CompanyProducts
