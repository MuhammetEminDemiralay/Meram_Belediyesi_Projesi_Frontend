import { NavLink, Outlet } from "react-router-dom";


function EMeramLayout(){

    return (
        <>
            <h1>E-COMMERCE</h1>
            <NavLink to="productAdd">Product Add</NavLink> |||||||||||<br />
            <NavLink to="products">Product List</NavLink>

            <Outlet/>
        </>

      
    )
}

export default EMeramLayout