import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../../Redux/Slices/ProductSlicer'
import { NavLink, useNavigate } from 'react-router-dom';




function Products() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const navi = useNavigate();

    useEffect(() => {
        dispatch(fetchAllProducts())
    })

    return (
        <div>
            <ul>
                {
                    products?.map(product => (
                        <li key={product.id}>{product.id} - {product.productName}</li>
                    ))
                }
            </ul>
            <button onClick={() => navi("/e-meram/createcompany")}>Create Company</button>
        </div>
    )
}

export default Products