import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { logout } from '../../../Redux/Slices/AuthSlice';
import Notification from '../Messages/Notification/Notification';


function Navbar() {

    const { currentUser, isAuth } = useSelector(state => state.auth);
    const [active, setActive] = useState(true);
    const navi = useNavigate();
    const dispatch = useDispatch();
    const [mode, setMode] = useState();
    const [userAnswer, setUserAnswer] = useState();
    const [targetAnswer, setTargetAnswer] = useState();


    useEffect(() => {
        getAnswer();
    }, [currentUser])

    function handleDropdown(e) {
        setActive(active ? false : true)
        if (e == 1) {
            setMode("bell")
        } else if (e == 2) {
            setMode("log")
        }
    }

    const getAnswer = async () => {
        console.log(currentUser);
        if (currentUser.id) {
            const response = await fetch(`https://localhost:44358/api/Message/getallmessagesbyuserıd?userId=${currentUser.id}`)
            const data = await response.json();
            setUserAnswer(data.data.reverse());
            return data
        }
    }

    function handleAuth() {
        dispatch(logout())
    }

    return (
        <div className='navbar-container'>

            <div className="top-navbar">
                <div className="field left">
                    <>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle initail-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Başkan
                            </button>
                            <ul className="dropdown-menu p-0 mt-3">
                                <li><NavLink to={"resume"} className="dropdown-item dropdown-item-navlink">Özgeçmiş</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink" >Başkamn'a Mesaj</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Başkan'la Fotoğrafınız</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Önceki Başkanlar</NavLink></li>
                            </ul>
                        </div>
                    </>
                    <>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle initail-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Kurumsal
                            </button>
                            <ul className="dropdown-menu p-0 mt-3">
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Kurum Felsefesi</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Organizasyon Şeması</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Başkan Yardımcıları</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Belediye ve Encümen</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Müdürlükler</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Mali Durum ve Beklentiler Raporu</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Bütçe</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Performans Programları</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Plan ve Raporlar</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Arşiv Yönergesi</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Etik Komisyonu</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Mevzuat</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Kurumsal Kimlik</NavLink></li>
                            </ul>
                        </div>
                    </>
                    <>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle initail-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hizmet
                            </button>
                            <ul className="dropdown-menu p-0 mt-3">
                                <li><NavLink className="dropdown-item dropdown-item-navlink">İyi Kİ Doğdun Bebek</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Evlilik İşlemleri</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Başvuru Klavuzu</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Ruhsat İşlemleri</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Sıkça Sorulan Sorular</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Çalışma Yönetmelikleri</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Standart Dosya Planı</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Beyanname Formları</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Vergi Takvimi</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Arabuluculuk</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Hizmet Standartları</NavLink></li>
                            </ul>
                        </div>
                    </>
                    <>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle initail-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bilgi
                            </button>
                            <ul className="dropdown-menu p-0 mt-3">
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Haberler</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Duyurular</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">İhaleler</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Dosyalar</NavLink></li>
                                <li><NavLink className="dropdown-item dropdown-item-navlink">Haber Arşivi</NavLink></li>
                            </ul>
                        </div>
                    </>
                </div>
                <div onClick={() => navi("/home")} className="title-field">
                    MERAM
                </div>
                <div className="field right">
                    <div className='top'>
                        <i className={`bi bi-shop icon ${isAuth ? "actice" : "noActive"}`} onClick={() => { navi("e-meram") }}></i>
                        <i className={`bi bi-bell icon bell`} onClick={() => handleDropdown(1)} id='bell'></i>
                        <i className="bi bi-person-circle icon" onClick={() => handleDropdown(2)} id='log'></i>
                    </div>
                    <div className={`bottom ${active ? 'dropdown-active' : ''}`}>
                        {mode == "log" &&
                            <>
                                {!isAuth && (
                                    <>
                                        <div className='log' onClick={() => navi("auth/login")}>Giriş yap</div>
                                        <div className='log' onClick={() => navi("auth/register")}>Kayıt ol</div>
                                    </>
                                )}
                                {isAuth && (
                                    <div className='profil-box'>
                                        <div className="profil profil-text ">{currentUser.name}</div>
                                        <div onClick={handleAuth} className="profil profil-logout">
                                            Çıkış yap
                                            <i className="bi bi-door-open-fill"></i>
                                        </div>
                                    </div>
                                )}
                            </>
                        }
                        {mode == "bell" &&
                            <>
                                {isAuth && (
                                    <div className='notification-boxs'>
                                        {userAnswer.map(answer => <Notification setTargetAnswer={setTargetAnswer} key={answer.id} answer={answer} />)}
                                    </div>
                                )}
                            </>
                        }
                    </div>
                    {!active && mode == "bell" &&
                        <div className={`message-detail-box`}>
                            {targetAnswer}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar