import { useDispatch, useSelector } from 'react-redux'
import './CssComponents/Products.css'
import { useEffect } from 'react'
import { fetchAllProducts } from '../../Redux/Slices/ProductSlicer'
import { postToApi } from '../../Redux/Slices/ProductSlicer'


function Products() {

    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetchAllProducts();
          console.log(response);
        };
        fetchData();
    },[])

    useEffect(() => {

    }, [])

    const emtyModel = {
        userId : 1,
        categoryId : 1,
        productName : "Muhammet",
        unitPrice : 10,
        unitsInStock : 10,
        description : "Bilmiyorum"
    }

    function productHandle(){
        dispatch(postToApi({ data : emtyModel })).then(() => {
            console.log(emtyModel);
            console.log('Post işlemi tamamlandı!');
          });
    }

    return (
        <>
            <ul>
                {products && 
                    products.map(product => (
                        <li key={product.id}>{product.productName}</li>
                    ))
                }
            </ul>
            <button onClick={productHandle}>Yükle</button>
        </>
    )
}

export default Products