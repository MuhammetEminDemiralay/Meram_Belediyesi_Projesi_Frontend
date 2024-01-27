import './Notification.css'

function Notification({ answer, setTargetAnswer}) {

    const title = answer.title.slice(0, 25)
    const questionBody = answer.questionBody.slice(0, 30)
    const answerBody = answer.answerBody.slice(0, 25)
    const returnDate = answer.returnDate.slice(11, 16)


    return (
        <div className='notification-box'>
            <div className='notification-question'>
                <li className='notification-question-title'>{title}</li>
                <li className='notification-question-body'>{questionBody}<span style={{ letterSpacing: "3px", marginLeft: "3px" }}>...</span></li>
                {answer.president == true && (
                    <i className="bi bi-stars president-star">Başkan</i>)
                }
                {answer.president == false && (
                    <i className="bi bi-star-fill president-star">Belediye</i>
                )
                }
            </div>
            <div  className={`notification-answer`}>
                <li onClick={() => setTargetAnswer(answerBody)}>{answerBody}<span style={{ letterSpacing: "3px", marginLeft: "3px" }}>...</span></li>
                <span className='notification-date'>{returnDate}</span>
            </div>
            {answer.completed}
        </div>
    )
}

export default Notification