import './ProductAdd.css'
import { postProduct } from "../../../Redux/Slices/ProductSlicer";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


function ProductAdd({ userId, productUpdateModel }) {

    const dispatch = useDispatch();
    const productModel = {
        id: undefined,
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
            console.log(productUpdateModel);
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
    }, [userId, productUpdateModel])

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postProduct(product))
    }

    function inputChange(e) {
        setProduct(prev => (
            { ...prev, [e.target.id]: e.target.value, companyId: company.id, userId: userId }
        ))
    }

    return (
        <div className='company-add-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className="input-add-box">
                    <label htmlFor="productName"><b>Ürün adı</b></label>
                    <input value={productUpdateModel?.productName} onChange={inputChange} type="text" placeholder="araba" id="productName" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="category"><b>Kategori</b></label>
                    <select id='categoryId' onChange={inputChange}>
                        {
                            category.map(category => (
                                
                                <option selected={productUpdateModel && productUpdateModel.categoryId} key={category.id} value={category.categoryId}>{category.categoryName}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="input-add-box">
                    <label htmlFor="unitPrice"><b>Birim fiyat</b></label>
                    <input onChange={inputChange} type="number" placeholder="10" id="unitPrice" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="unitsInStock"><b>Stok Miktarı</b></label>
                    <input onChange={inputChange} type="number" placeholder="6" id="unitsInStock" />
                </div>
                <div className="input-add-box">
                    <label htmlFor="description"><b>Açıklama</b></label>
                    <input onChange={inputChange} type="text" placeholder="açıklama" id="description" />
                </div>
                <div className="input-add-box">
                    <button type='submit' className="product-add-btn">Giriş</button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd