import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../../Redux/Slices/ProductSlicer'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import ProductCard from '../ProdutCard/ProductCard';
import { current } from '@reduxjs/toolkit';




function Products() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const user = useSelector(state => state.auth.currentUser)
    const navi = useNavigate();
    const [company, setCompany] = useState({});
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState();
    const [filterProducts, setFilterProducts] = useState();

    useEffect(() => {
        dispatch(fetchAllProducts())
        if (categoryId) {
            setFilterProducts(products.filter(p => p.categoryId == categoryId))
        }

        getAllCategories();
        companyExist()
    }, [user, categoryId])

    const companyExist = async () => {
        if (user.id) {
            const response = await fetch(`https://localhost:44358/api/Company/getcompany?userId=${user.id}`)
            const datas = await response.json()
            setCompany(datas.data)
            return datas.data;
        }
    }

    const getAllCategories = async () => {
        const response = await fetch('https://localhost:44358/api/Category/getall')
        const datas = await response.json();
        setCategory(datas.data)
        return datas.data;
    }

    function handleCompany() {
        company?.id ? navi(`mycompany/${company.id}`) : user.id ? navi("createcompany") : navi("/auth/login")
    }

    return (
        <div className='products-wrapper'>
            <div className="container products-container">
                <div className="navbar-row">
                    <div className="navbar-row-title-box">
                        <i className='bx bxs-store'></i>
                        <span>Meram Market</span>
                        <i className="bi bi-cart-fill basket-route"></i>
                    </div>
                    <div className="navbar-row-route-box">
                        <div className="navbar-row-my-componay-route">
                            <button onClick={handleCompany}>
                                <i className="bi bi-shop-window"></i>
                                {company?.id ? "Dükkanım" : "Dükan Kur"}
                            </button>
                        </div>
                        <i onClick={() => navi("/")} className="bi bi-house-fill home-icon"></i>
                    </div>
                </div>
                <div className="products-row">
                    <div className="products-col category">
                        <div onClick={() => setCategoryId(null)} className={`category-wrapper ${categoryId == null && "active-products-category"}`}>
                            Tüm Kategoriler
                            <i className={`bi bi-basket2-fill basket ${categoryId == null && "basket-active"}`}></i>
                        </div>
                        <ul className='category-ul'>
                            {
                                category.map(category => <Category key={category.id} categoryId={categoryId} setCategoryId={setCategoryId} category={category} />)
                            }
                        </ul>
                    </div>
                    <div className="products-col products">
                        <ul className='product-ul'>
                            {categoryId &&
                                filterProducts?.map(product => <ProductCard key={product.id} product={product} />)
                            }
                            {
                                categoryId == null &&
                                products?.map(product => <ProductCard key={product.id} product={product} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products