import React from 'react'
import './Message.css'

function Message(props) {
    return(
        <div className="message">
            <h1>Винни Пух</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default Message