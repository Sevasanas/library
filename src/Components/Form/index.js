import React, { useState } from 'react'
import './form.css'

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            author: 'Me',
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="field" type="text" value={value} onChange={handleChange} />
            <input className="button" type="submit" />
        </form>
    )
}