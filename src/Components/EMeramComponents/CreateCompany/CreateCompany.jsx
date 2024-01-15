import { useEffect, useState } from 'react'
import './CreateCompany.css'
import { useSelector } from 'react-redux';

function CreateCompany() {

    const { currentUser } = useSelector(state => state.auth);
    const companyModel = { userId: currentUser.id, companyName: "" }
    const [company, setCompany] = useState(companyModel)

    const createCompany = async () => {
        const response = await fetch('https://localhost:44358/api/Company/add', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(company)
        })
        const data = await response.json()
        return data
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (company.companyName) {
            createCompany()
        }
    }

    function inputChange(e) {
        setCompany(prev => ({ ...prev, companyName: e.target.value, userId : currentUser.id }))
    }


    return (
        <div className="create-company-wrapper">
            <div className="container create-company-container">
                <div className="company-title">
                    <h1>Mağazanı oluştur</h1>
                </div>
                <div className="company-select">
                    <form onSubmit={handleSubmit} className="create-company-box">
                        <div className="input-box">
                            <input onChange={inputChange} type="text" placeholder="company name" />
                        </div>
                        <div className="input-box">
                            <button type='submit' className="company-btn">Dükkanı aç</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCompany