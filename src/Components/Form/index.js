import React, { useState } from 'react'

export const Form = ({onSendMessage}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        onSendMessage({
            author: 'Me',
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}