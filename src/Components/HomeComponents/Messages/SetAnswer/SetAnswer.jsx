import { useState } from 'react'
import './SetAnswer.css'

function SetAnswer({ question }) {

    const [answer, setAnswer] = useState()
    const [completed, setCompleted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        addAnswer();
        if(completed){
            updateMessage()
            window.location.reload();
        }
       
    }

    const addAnswer = async () => {
        const response = await fetch('https://localhost:44358/api/Answer/add', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(answer)
        })
        const data = await response.json()
        if(data.success){
            setCompleted(true);
        }
        return data
    }

    const updateMessage = async () => {
        console.log("Güncelle");
        question.completed = true;
        const response = await fetch('https://localhost:44358/api/Message/update', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(question)
        })
        const data = await response.json()
        console.log(data);
        return data
    }


    function inputChange(e) {
        setAnswer(prev => (
            { ...prev, [e.target.id]: e.target.value, userId: question.userId, messageId: question.id, president : question.president}
        ))
    }

    return (
        <div className='set-answer'>
            <form onSubmit={handleSubmit}>
                <textarea  className='answer-textarea' onChange={inputChange} id='body'/>
                <button className='answer-btn'  type='submit'>Cevapla</button>
            </form>
        </div>
    )
}

export default SetAnswer