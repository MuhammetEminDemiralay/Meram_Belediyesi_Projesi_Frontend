import { Outlet } from 'react-router-dom'
import './CssLayout/AuthLayout.css'

function AuthLayout(){

    return (
        <>
            <h1>Auth layout</h1>
            <Outlet/>
        </>
    )
}

export default AuthLayout