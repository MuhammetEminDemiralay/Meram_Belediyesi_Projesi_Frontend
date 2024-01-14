import './ProductAdd.css'
import { useDispatch, useSelector } from "react-redux"
import { postProduct } from "../../../Redux/Slices/ProductSlicer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 




function ProductAdd(){

    const navi = useNavigate();

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const [productData, setProductData] = useState({
        userId: 1,
        categoryId: 1,
        productName: 'Muha888sa11e222s22',
        unitPrice: 0,
        unitsInStock: 0,
        description: 'string',
    });

    function productHandle() {
        dispatch(postProduct(productData))
        navi('/')
    }


    return (
        <>
            <button onClick={productHandle}>Yükle</button>  
        </>
    )
}

export default ProductAdd