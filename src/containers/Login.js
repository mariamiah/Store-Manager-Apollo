import React, {useState} from 'react';
import { Login } from '../components/Login';

export const LoginContainer = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <Login onSubmit={handleSubmit} loading={loading} />
    )
}