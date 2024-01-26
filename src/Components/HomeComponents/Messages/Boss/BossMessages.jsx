import { useEffect } from 'react'
import './BossMessages.css'
import { useState } from 'react';
import MessageItem from '../MessageItem/MessageItem';
import GetQuestion from '../GetQuestion/GetQuestion';
import SetAnswer from '../SetAnswer/SetAnswer';

function BossMessages() {

    const [questions, setQuestions] = useState([]);
    const [question, setOneQuestion] = useState({})
    const messageImage = "message.jpg"
    const imageUrl = `https://localhost:44358/Images/`


    useEffect(() => {
        getMessages();
    }, [])

    const getMessages = async () => {
        const response = await fetch('https://localhost:44358/api/Message/getall')
        const data = await response.json();
        const filterData = data.data.filter(da => da.president == true && da.completed == false)
        setQuestions(filterData);
        return data.data
    }

    function setQuestion(question) {
        setOneQuestion(question);
    }

    return (
        <div className="boss-messages-container ">
            <div className="container boss-message-container">
                <img className='boss-message-paper' src={imageUrl + messageImage} alt="" />
                <div className="answer-field">
                    <div className="get-question-field">
                        <GetQuestion question={question} />
                    </div>
                    <div className="set-answer-field">
                        <SetAnswer question={question} />
                    </div>
                </div>
                <div className="question-field">
                    <ul>
                        <span>Mesajlar</span>
                        {
                            questions.map(question => (<MessageItem setQuestion={setQuestion} key={question.id} question={question} />))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default BossMessages