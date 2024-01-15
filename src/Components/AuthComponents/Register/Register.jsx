import { useDispatch } from 'react-redux';
import './Register.css'
import { register } from '../../../Redux/Slices/AuthSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {

    const dispatc = useDispatch();
    const registerModel = {  email : "",  password : "", firstName : "", lastName : ""}
    const [user, setUser] = useState(registerModel)
    const navi = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        dispatc(register(user))    
        navi("/auth/login")
    }

    function inputChange(e) {
        setUser(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    return (
        <div className="register-wrapper">
            <div className="container register-container">
                <div className="register-title">
                    <h3>MERAM BELEDİYESİ</h3>
                </div>
                <div className="register-window">
                    <h2 className="main-title">Kayıt ol</h2>
                    <form onSubmit={handleRegister} className="register-box">
                        <div className="input-box">
                            <label htmlFor="firstName">İsim</label>
                            <input onChange={inputChange} type="text" placeholder="Mustafa" id="firstName" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="lastName">Soy İsim</label>
                            <input onChange={inputChange} type="text" placeholder="Kavuş" id="lastName" />
                        </div>
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
}

export default Register