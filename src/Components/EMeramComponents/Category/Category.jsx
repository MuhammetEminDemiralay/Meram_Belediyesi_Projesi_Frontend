import './Category.css'

function Category({category}){

    return (
        <div className='category-wrapper'>
            <li className='category-item'>{category.categoryName}</li>
        </div>
    )
}

export default Category