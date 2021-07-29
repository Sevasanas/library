import React from 'react'
import './Message.css'

export const Message = ({ text, author }) => (
    <div>
        {author} : {text}
    </div>
);