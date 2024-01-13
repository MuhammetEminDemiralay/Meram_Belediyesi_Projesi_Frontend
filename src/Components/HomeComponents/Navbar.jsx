import { useNavigate } from 'react-router-dom'
import './CssComponent/Navbar.css'

function Navbar() {

    const navi = useNavigate();

    return (
        <div className='navbar-container'>
            <i className="bi bi-gem gem"></i>
            <div className="top-navbar">
                <div className="field left">
                    sol
                </div>
                <div className="title-field">
                    MERAM
                </div>
                <div className="field right">
                    <i className='bx bx-log-in-circle icon'></i>
                    <i className="bi bi-shop icon" onClick={() => navi("e-meram/products")}></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar