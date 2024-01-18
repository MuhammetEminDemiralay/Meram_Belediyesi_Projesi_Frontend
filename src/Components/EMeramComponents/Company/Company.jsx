
import { useDispatch, useSelector } from 'react-redux'
import './Company.css'
import { useEffect, useState } from 'react'
import CompanyProducts from '../CompanyProducts/CompanyProducts';
import ProductAdd from '../ProductAdd/ProductAdd';
import ProductImageAdd from '../ProductImageAdd/ProductImageAdd';
import { removeProduct } from '../../../Redux/Slices/ProductSlicer';
import { useNavigate } from 'react-router-dom';



function Company() {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth)
    const allProducts = useSelector(state => state.product)
    const [products, setProducts] = useState([]);
    const [product, setProductModel] = useState();
    const [productActive, setProductActive] = useState(false);
    const [company, setCompany] = useState();
    const navi = useNavigate()


    useEffect(() => {
        if (currentUser.id) {
            companyExist()
        }
        userProducts();
    }, [currentUser, allProducts, product])

    const companyExist = async () => {
        if (currentUser.id) {
            const response = await fetch(`https://localhost:44358/api/Company/getcompany?userId=${currentUser.id}`)
            const datas = await response.json()
            setCompany(datas.data)
            return datas
        }
    }

    const userProducts = async () => {
        if (currentUser.id) {
            const response = await fetch(`https://localhost:44358/api/Product/getproductsbyuserid?userId=${currentUser.id}`)
            const datas = await response.json()
            setProducts(datas.data)
        }
    }

    function updateProduct(productId) {
        const model = products.find(p => p.id === productId)
        const newModel = {
            id: model.id,
            userId: model.userId,
            categoryId: model.categoryId,
            companyId: model.companyId,
            productName: model.productName,
            unitPrice: model.unitPrice,
            unitsInStock: model.unitsInStock,
            description: model.description
        }
        setProductModel(newModel);
    }

    function deleteProduct(productId) {
        const model = products.find(p => p.id === productId)
        const newModel = {
            id: model.id,
            userId: model.userId,
            categoryId: model.categoryId,
            companyId: model.companyId,
            productName: model.productName,
            unitPrice: model.unitPrice,
            unitsInStock: model.unitsInStock,
            description: model.description
        }
        if (window.confirm("Silmek istediğine emin misin?")) {
            dispatch(removeProduct(newModel))
        }
    }

    return (
        <div className='company-wrapper'>
            <div className="container company-container">
                <div className="row company-row">
                    <div className="col-4 company-col add">
                        <div className='company-image-add'>
                            <ProductImageAdd productUpdateModel={product} />
                        </div>
                        <div className='company-body-add'>
                            <ProductAdd setProductActive={setProductActive} productActive={productActive} setProductUpdateModel={setProductModel} productUpdateModel={product} userId={currentUser.id} />
                        </div>

                    </div>
                    <div className="col-8 company-col list">
                        <div className='company-product-navbar'>
                            <i className="bi bi-boxes box"></i>
                            <h1>{company?.companyName}</h1>
                            <div className="route-box">
                                <i className='bx bxs-store icon' onClick={() => navi("/e-meram")}></i>
                                <i className="bi bi-house-fill icon" onClick={() => navi("/")}></i>
                            </div>
                        </div>
                        <CompanyProducts productActive={productActive} setProductActive={setProductActive} updateProduct={updateProduct} deleteProduct={deleteProduct} products={products} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company