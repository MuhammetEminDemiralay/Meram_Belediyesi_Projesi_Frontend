import './Category.css'

function Category({category, setCategoryId, categoryId}){

    return (
        <div onClick={() => setCategoryId(category.id)} className={`category-wrapper ${category.id == categoryId && "active-products-category"}`}>
            <li  className='category-item'>{category.categoryName}</li>
            <i className={`bi bi-basket2-fill basket ${category.id == categoryId && "basket-active"}`}></i>
        </div>
    )
}

export default Category