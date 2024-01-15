import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

function Navbar() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
    const [active, setActive] = useState(true);
    const navi = useNavigate();
    const fieldRef = useRef();


    function handleDropdown() {
        setActive(active ? false : true)
    }

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
                    <div className='top'>                                                                    
                        <i className={`bi bi-shop icon ${isAuth ? "actice" : "noActive"}`} onClick={() => { navi("e-meram") }}></i>
                        <i className="bi bi-person-circle icon" onClick={() => handleDropdown()}></i>
                    </div>
                    <div className={`bottom ${active ? 'dropdown-active' : ''}`}>
                        {!isAuth && (
                            <>
                                <div className='log' onClick={() => navi("auth/login")}>Giriş yap</div>
                                <div className='log' onClick={() => navi("auth/register")}>Kayıt ol</div>
                            </>
                        )}
                        {isAuth && (
                            <>
                               <div className="profil profil-img">image</div>
                               <div className="profil profil-text">description</div>
                               <div className="profil profil-icon">logout</div>
                            </>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar