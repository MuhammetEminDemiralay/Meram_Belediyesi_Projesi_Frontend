import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../../Redux/Slices/ProductSlicer'
import { NavLink, useNavigate } from 'react-router-dom';




function Products() {

    const dispatch = useDispatch();
    const {products} = useSelector(state => state.product);
    const user = useSelector(state => state.auth.currentUser)
    const navi = useNavigate();
    const [company, setCompany] = useState({});


    useEffect(() => {
        dispatch(fetchAllProducts())
        companyExist()
    }, [user])

    const companyExist = async () => {
        if (user.id) {
            const response = await fetch(`https://localhost:44358/api/Company/getcompany?userId=${user.id}`)
            const datas = await response.json()
            setCompany(datas)
        }
    }

    return (
        <div>
            <ul>
                {
                    products?.map(product => (
                        <li key={product.id}>{product.id} - {product.productName}</li>
                    ))
                }
            </ul>
            <button onClick={() => (company.data ? navi("mycompany") : navi("createcompany"))}>Şirket oluştur</button>
        </div>
    )
}

export default Products