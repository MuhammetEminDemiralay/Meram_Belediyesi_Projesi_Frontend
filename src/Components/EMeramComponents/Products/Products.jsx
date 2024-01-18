import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../../Redux/Slices/ProductSlicer'
import { NavLink, useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import ProductCard from '../ProdutCard/ProductCard';




function Products() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const user = useSelector(state => state.auth.currentUser)
    const navi = useNavigate();
    const [company, setCompany] = useState({});
    const [category, setCategory] = useState([]);


    useEffect(() => {
        dispatch(fetchAllProducts())
        getAllCategories();
        companyExist()
    }, [user])

    const companyExist = async () => {
        if (user.id) {
            const response = await fetch(`https://localhost:44358/api/Company/getcompany?userId=${user.id}`)
            const datas = await response.json()
            setCompany(datas)
            return datas.data;
        }
    }

    const getAllCategories = async () => {
        const response = await fetch('https://localhost:44358/api/Category/getall')
        const datas = await response.json();
        setCategory(datas.data)
        return datas.data;
    }


    return (
        <div className='products-wrapper'>
            <div className="container products-container">
                <div className="navbar-row">
                    Bar
                </div>
                <div className="products-row">
                    <div className="products-col category">
                        <div className='category-wrapper'>
                            Tüm Kategoriler
                        </div>
                        <ul>
                            {
                                category.map(category => <Category key={category.id} category={category} />)
                            }
                        </ul>
                    </div>
                    <div className="products-col products">
                        <ul>
                            {
                                products.map(product => <ProductCard key={product.id} product={product} />)
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products