import React, { useState } from "react";
import './Login.css'
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const loginModel = { email: "", password: "" }
    const [user, setUser] = useState(loginModel)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login(user))
        navi("/") 
    }

    function inputChange(e) {
        setUser(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    return (
        <div className="login-wrapper">
            <div className="container login-container">
                <div className="login-title">
                    <h3>MERAM BELEDİYESİ</h3>
                </div>
                <div className="login-window">
                    <h2 className="main-title">Giriş</h2>
                    <form onSubmit={handleSubmit} className="login-box">
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input onChange={inputChange} type="email" placeholder="joe@gmail.com" id="email" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Şifre</label>
                            <input onChange={inputChange} type="password" placeholder="Şifrenizi girin" id="password" />
                        </div>
                        <div className="input-box">
                            <button type='submit' className="log-btn">Giriş</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;