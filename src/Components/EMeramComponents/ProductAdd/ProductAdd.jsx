import './ProductAdd.css'
import { postProduct, updateProduct } from "../../../Redux/Slices/ProductSlicer";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


function ProductAdd({ userId, productUpdateModel, setProductUpdateModel, setProductActive, productActive}) {

    const dispatch = useDispatch();
    const productModel = {
        id: productUpdateModel?.id,
        userId: 0,
        categoryId: 0,
        companyId: 0,
        productName: "",
        unitPrice: 0,
        unitsInStock: 0,
        description: ""
    }
    const [product, setProduct] = useState(productModel)
    const [category, setCategory] = useState([]);
    const [company, setCompany] = useState({});

    useEffect(() => {
        const getAllCategories = async () => {
            const response = await fetch('https://localhost:44358/api/Category/getall')
            const datas = await response.json();
            setCategory(datas.data)
            return datas.data;
        }
        getAllCategories();
        const getCompany = async () => {
            if (userId) {
                const response = await fetch(`https://localhost:44358/api/Company/getcompany?userId=${userId}`)
                const datas = await response.json();
                setCompany(datas.data)
                return datas.data
            }
        }
        getCompany()
        setProductUpdateModel(productUpdateModel)

    }, [userId, productUpdateModel, product, setProductUpdateModel])

    function productHandle(e) {
        e.preventDefault();
        const { id, ...newProduct } = product
        dispatch(postProduct(newProduct))
    }

    function updateHandle(e) {
        e.preventDefault();
        dispatch(updateProduct(product))
        setProductUpdateModel(prev => undefined)
    }

    function inputChange(e) {
        if (productUpdateModel) {
            setProduct(productUpdateModel)
            setProductUpdateModel(undefined)
        } else {
            setProduct(prev => (
                { ...prev, [e.target.id]: e.target.value, companyId: company.id, userId: userId, id: product?.id }
            ))

        }
    }

    function handleProductUpdateModel() {
        setProduct(productModel);
        setProductActive(false)
    }

    return (
        <div className='company-add-wrapper'>
            <i className='bx bx-plus icon' onClick={handleProductUpdateModel}></i>
            <h3 className='product-update-or-add'>{ productActive ? "Ürün Güncelle" : "Ürün Ekle"}</h3>
            <form onSubmit={product.id ? updateHandle : productHandle}>
                <div className="input-add-box">
                    <label htmlFor="productName"><b>Ürün adı</b></label>
                    <input value={product?.productName} onChange={inputChange} type="text" placeholder="araba" id="productName" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="category"><b>Kategori</b></label>
                    <select id='categoryId' onChange={inputChange}>
                        {
                            category.map(category => (
                                <option key={category.id} value={category.id}>{category.categoryName}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="input-add-box">
                    <label htmlFor="unitPrice"><b>Birim fiyat</b></label>
                    <input value={product?.unitPrice} onChange={inputChange} type="number" placeholder="10" id="unitPrice" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="unitsInStock"><b>Stok Miktarı</b></label>
                    <input value={product?.unitsInStock} onChange={inputChange} type="number" placeholder="6" id="unitsInStock" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="description"><b>Açıklama</b></label>
                    <input value={product?.description} onChange={inputChange} type="text" placeholder="açıklama" id="description" />
                </div>
                <div className="input-add-box">
                    <button type='submit' className="product-add-btn">{ productActive ? "Güncelle" : "Ekle"}</button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd