import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../../Redux/Slices/ProductSlicer'



function Products() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

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
        </div>
    )
}

export default Products