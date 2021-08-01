import React from 'react'


const Message = ({ text, author }) => (
    <div>
        {author} : {text}
    </div>
);

export default Message;