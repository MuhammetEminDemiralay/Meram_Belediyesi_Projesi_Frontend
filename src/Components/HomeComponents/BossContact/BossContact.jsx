import { useEffect, useState } from 'react'
import './BossContact.css'

function BossContact() {

    const imageUrl = `https://localhost:44358/Images/`
    const bossImage = "boss.jpg"
    const [toggle, setToggle] = useState(false);

    function handleOption(e){
        const value = e.target.value;
        if(value == 1){
            
        }
    }


    return (
        <div className="bosss-container ">
            <div className="container boss-container">
                <div className='template'></div>
                <img className='boss-paper' src={imageUrl + bossImage} alt="" />
                <div  className={`boss-navbar ${toggle ? "toggle-active" : "toggle-passive"}`}>
                    <i onClick={() => setToggle(prev => !prev)} className='bx bx-chevron-right toggle'></i>
                    <div className="message-option">
                        <button onClick={handleOption} value={1} className="field boss">Başkana</button>
                        <button onClick={handleOption} value={2} className="field municipality">Belediyeye</button>
                    </div>
                    <div className="toggle-field">
                        aaaaaa
                    </div>
                </div>
         
            </div>
        </div>
    )
}


export default BossContact