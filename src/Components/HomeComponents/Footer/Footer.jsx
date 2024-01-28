import { NavLink } from 'react-router-dom'
import './Footer.css'


function Footer() {

    const logo = "meram-logo.jpg"
    const imageUrl = `https://localhost:44358/Images/`

    return (
        <div className="footers-container">
            <div className="container footer-container">
                <div className="left-col">
                    <h1>Meram Belediyesi</h1>
                    <div className='contact-box'>
                        <i className="bi bi-facebook contact-icon"></i>
                        <i className="bi bi-twitter contact-icon"></i>
                        <i className="bi bi-instagram contact-icon"></i>
                    </div>
                    <div className="phone-contact">
                        <i className="bi bi-telephone-fill phone"></i>
                        <span className='number'>444 3 042</span>
                    </div>
                    <div className='email'>bizimmeram@meram.bel.tr</div>
                    <div className='location'>Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</div>
                </div>
                <div className="right-col">
                    <div className="link-box">
                        <h2>Başkan</h2>
                        <a>Öz Geçmiş</a>
                        <a>Başkan'a Mesaj</a>
                        <a>Başkan'la Fotoğrafınız</a>
                        <a>Önceki Başkanlar</a>
                    </div>
                    <div className="link-box">
                        <h2>Kurumsal</h2>
                        <a>Kurum Felsefesi</a>
                        <a>Organizasyon Şeması</a>
                        <a>Başkan Yardımcıları</a>
                        <a>Belediye Meclis Üyeleri</a>
                        <a>Müdürlükler</a>
                        <a>Bütçe</a>
                        <a>Performans Programları</a>
                        <a>Plan ve Raporlar</a>
                    </div>
                    <div className="link-box">
                        <h2>Bilgi</h2>
                        <a>Haberler</a>
                        <a>Duyurular</a>
                        <a>İhaleler</a>
                        <a>Dosyalar</a>
                        <a>Haber Arşivi</a>
                    </div>
                    <div className="link-box">
                        <h2>Hizmet</h2>
                        <a>İyi Kİ Doğdun Bebek</a>
                        <a>Evlilik İşlemleri</a>
                        <a>Ruhsat İşlemleri</a>
                        <a>Sıkça Sorulan Sorular</a>
                        <a>Çalışma Yönetmelikleri</a>
                        <a>Standart Dosya Planı</a>
                        <a>Beyanname Formları</a>
                        <a>Vergi Takvimi</a>
                        <a>Arabuluculuk</a>
                        <a>Hizmet Standartları</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer