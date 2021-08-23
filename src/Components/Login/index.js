import React from 'react';
import { useInput } from '../../utils/useInput';
import './login.css'

export const Login = () => {
    const { 
        value: email, 
        handleChange: handleChangeEmail, 
        reset: resetEmail,
    } = useInput("");

    const { 
        value: password, 
        handleChange: handleChangePassword, 
        reset: resetPassword,
    } = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();

        resetEmail();
        resetPassword();
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={email} onChange={handleChangeEmail} />
            <input type="password" placeholder="password" value={password} onChange={handleChangePassword} />
            <input type="submit" />
        </form>
    )
}