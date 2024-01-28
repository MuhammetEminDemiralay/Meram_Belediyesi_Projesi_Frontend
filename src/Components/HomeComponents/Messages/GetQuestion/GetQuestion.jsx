import { useEffect } from 'react'
import './GetQuestion.css'

function GetQuestion({ question }) {

    useEffect(() => {
    }, [question])

    return (
        <div className='get-question'>
            <div className='get-question-field'>
                <div className='inter'>
                    <div className='title-question'>{question.title}</div>
                    <div className='body-question'>{question.body}</div>
                </div>
            </div>
        </div>
    )
}


export default GetQuestion