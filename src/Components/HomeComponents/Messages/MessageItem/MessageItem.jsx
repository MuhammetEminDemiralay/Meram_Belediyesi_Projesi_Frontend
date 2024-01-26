import { useEffect } from 'react'
import './MessageItem.css'
import { useState } from 'react';

function MessageItem({question, setQuestion}) {

    const bodySlice = question.body.slice(0,45)

    return (
        <div className='question'>
            <li className='question-title'>{question.title}</li>
            <li className='question-body'>{bodySlice}...</li>
            <button onClick={() => setQuestion(question)}>Cevapla</button>
        </div>
    )
}


export default MessageItem