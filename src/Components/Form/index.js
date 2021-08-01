import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');

    const inputRef = useRef(null);
    useEffect(() => {
        if(inputRef.current) {
            inputRef.current?.focus();
        }
    }, []);
    
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
            <TextField type="text" ref={inputRef} id="standard-basic" label="Standard" value={value} onChange={handleChange} /> 
            <Button type="submit" variant="contained">Отправить</Button>
        </form>
    )
}