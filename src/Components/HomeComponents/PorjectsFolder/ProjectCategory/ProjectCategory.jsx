import './ProjectCategory.css'

function ProjectCategory({ item, setCategoryId, categoryId}) {

    
    return (
        <div onClick={() => setCategoryId(item.id ) } className={`project-category-list ${categoryId == item.id && "active-category"}`}>
            <li >{item.categoryName}</li>
        </div>
    )
}

export default ProjectCategory