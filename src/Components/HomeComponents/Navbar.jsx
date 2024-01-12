import './CssComponent/Navbar.css'

function Navbar() {
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
                    <i className="bi bi-shop icon"></i>
                    <i className='bx bx-log-in-circle icon'></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar