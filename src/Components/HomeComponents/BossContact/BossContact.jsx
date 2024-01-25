import { useEffect, useState } from 'react'
import './BossContact.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BossContact() {

    const imageUrl = `https://localhost:44358/Images/`
    const bossImage = "boss.jpg"
    const [toggle, setToggle] = useState(false);
    const [option, setOption] = useState(1);
    const { currentUser } = useSelector(state => state.auth);
    const messageModel = {
        userId: 0,
        title: "",
        body: "",
        president: false,
        completed: false,
        date: undefined
    }
    const [message, setMessage] = useState(messageModel);
    const navi = useNavigate();
    useEffect(() => {
        setMessage(prev => ({ ...prev, userId: currentUser.id }))
    }, [currentUser])

    function handleOption(e) {
        const value = e.target.value;
        if (value == 1) {
            setOption(1)
        } else if (value == 2) {
            setOption(2)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(message);
        const createMessage = async () => {
            const response = await fetch('https://localhost:44358/api/Message/add', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(message)
            })
            const data = await response.json()
            console.log(response);
            console.log(data);
            return data
        }
        createMessage();
    }

    function inputChange(e) {
        let president = false;
        option == 1 ? (president = true) : (president = false)
        console.log(president);
        setMessage(prev => (
            { ...prev, [e.target.id]: e.target.value, president: president }
        ))
    }

    return (
        <div className="bosss-container ">
            <div className="container boss-container">
                
                <div onClick={() => !(currentUser.id) && navi("/auth/login")} className={`message-btn ${currentUser.id && "message-btn-passive"}`}>
                    Mesajınız
                </div>
                <img className='boss-paper' src={imageUrl + bossImage} alt="" />
                <div className="boss-navbar">
                    <i className="bi bi-chat-left-text-fill chat-icon"></i>
                    <span className='boss-title'>BİZİMLE İLETİŞİME GEÇİN</span>
                    <div onClick={() => currentUser.role == "Admin" ? navi("boss-messages") : currentUser.role == "Editör" ? navi("editör-messages") : ""} className={`editör-boss-message ${currentUser.role == "Editör" ? "message-box-active" : currentUser.role == "Admin" ? "message-box-active" : "message-box-passive"}`}>
                        <i className="bi bi-envelope-fill"></i>
                        <div className="messages">{`${currentUser.role == "Admin" ? "Başkan" : currentUser.role == "Editör" ? "Belediye" : "" }`}</div>
                    </div>
                </div>
                <div className={`boss-sidebar-extra ${toggle ? "toggle-active" : "toggle-passive"} ${!(currentUser.id) && "sidebar-active"}`}>
                    <i onClick={() => setToggle(prev => !prev)} className='bx bx-chevron-right toggle'></i>
                    <div className="message-option">
                        <button onClick={handleOption} value={1} className={`field ${option == 1 && "boss"}`}>Başkana</button>
                        <button onClick={handleOption} value={2} className={`field ${option == 2 && "municipality"}`} >Belediyeye</button>
                    </div>
                    <div className="toggle-field">
                        <div className={`message ${option == 1 && "boss-message"}`}>
                            <form className='form-boss-message' onSubmit={handleSubmit}>
                                <h2>Başkana</h2>
                                <div className="input-message-box">
                                    <label htmlFor="title"><b>Mesaj Başlığı</b></label>
                                    <input onChange={inputChange} type="text" placeholder="başlık" id="title" />
                                </div>
                                <div className="input-message-box">
                                    <label htmlFor="body"><b>Açıklama</b></label>
                                    <textarea onChange={inputChange} type="text" placeholder="içerik" id="body" />
                                </div>
                                <div className="input-message-box">
                                    <button type='submit' className='message-add'>Gönder</button>
                                </div>
                            </form>
                        </div>
                        <div className={`message ${option == 2 && "municipality-message"}`}>
                            <form className='form-boss-message' onSubmit={handleSubmit}>
                                <h2>Belediyeye</h2>
                                <div className="input-message-box">
                                    <label htmlFor="title"><b>Mesaj Başlığı</b></label>
                                    <input onChange={inputChange} type="text" placeholder="başlık" id="title" />
                                </div>
                                <div className="input-message-box">
                                    <label htmlFor="body"><b>Açıklama</b></label>
                                    <textarea onChange={inputChange} type="text" placeholder="içerik" id="body" />
                                </div>
                                <div className="input-message-box">
                                    <button type='submit' className='message-add'>Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BossContact