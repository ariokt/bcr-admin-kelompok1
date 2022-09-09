import React from 'react';

import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import bgLogin from '../../assets/login.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ipsum from '../../assets/logoipsum.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleSigIn = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password:  password,
        };
        axios.post('https://bootcamp-rent-car.herokuapp.com/admin/auth/login', payload)
            .then(res => (
                localStorage.setItem('token', res.data.access_token),
                navigate('/')
            ))
            .catch(err => (setErr(err),
            setShow(true)))
    };

    return (
        <div className='login'>
            <div className='loginKiri'>
                <img src={bgLogin} alt="" />
            </div>
            <div className='loginKanan'>
                <Form className='loginkanan__form'>
                    <img src={ipsum}/>
                    <h2>Welcome, Admin BCR</h2>
                    {
                        show && (
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <p>
                                Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                                </p>
                            </Alert>
                        )
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Contoh: johndee@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="6+ karakter" />
                    </Form.Group>
                    <Button onClick={handleSigIn} variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
