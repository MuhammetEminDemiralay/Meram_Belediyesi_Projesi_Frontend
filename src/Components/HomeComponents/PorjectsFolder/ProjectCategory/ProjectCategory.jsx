import './ProjectCategory.css'

function ProjectCategory({ item, setCategoryId}) {

    return (
        <div onClick={() => setCategoryId(item.id)} className='project-category-list'>
            <li >{item.categoryName}</li>
        </div>
    )
}

export default ProjectCategory