import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/authPage.css';
import logo from './logo.png';

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    const headers = {
        'Content-Type': 'application/json',
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        setIsLoading(true); 

        axios.post('http://localhost:5193/api/Auth/login', { username, password }, {
            headers: headers,
        })
        .then(response => {
            const token = response.data.data.accessToken; 
            localStorage.setItem('token', token); 
            navigate('/library');
        })
        .catch(error => {
            setErrorMessage('Login failed. Please try again.');
        })
        .finally(() => {
            setIsLoading(false); 
        });
    };


    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true); 

        axios.post('http://localhost:5193/api/Auth/register', { username, password }, {
            headers: headers,
        })
        .then(response => {
        })
        .catch(error => {
            setErrorMessage('Registration failed. Please try again.');
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="register-wrapper">
            <div className="register-header">
                <img src={logo} alt="Logo" className="register-logo" />
                
            </div>
            <div className="register-form">
            {isLoading && <div className="loading-spinner"></div>}
                
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="button-group">
                        <button type="button" onClick={handleLoginSubmit}>Login</button>
                        <button type="button" onClick={handleRegisterSubmit}>Register</button>
                    </div>
                    {errorMessage && <div id="errorMessage" className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default AuthPage;

