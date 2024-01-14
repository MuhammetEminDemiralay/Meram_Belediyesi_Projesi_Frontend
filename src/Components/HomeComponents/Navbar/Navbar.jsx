import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Navbar() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
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

                    <i className={`bi bi-shop icon ${isAuth ? "actice" : "noActive"}`} onClick={() => {isAuth &&  navi("e-meram/products")}}></i>
                    <i className='bx bx-log-in-circle icon' onClick={() => navi("auth/login")}></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar