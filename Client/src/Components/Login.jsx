import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { spread } from 'axios';
import Layout from '../Pages/Layout';
import { useAuth } from '../Context/Auth.jsx';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/v1/auth/login', { email, password })
            .then((res) => {
                if (res.data.success) {
                    setAuth({
                        ...auth,
                        user:res.data.user,
                        token: res.data.token
                    })
                    navigate("/");
                }
                else {
                    alert("Invalid email or password");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <Layout title={"Login"}>
            <div className='login-container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-box'>
                            <input type='email' placeholder='Enter your Email' autoComplete='off' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Enter your Password' autoComplete='off' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='remember-forgot'>
                            <label htmlFor='forgot-password'>
                                <input type='check-box' />Remember me
                            </label>
                            <Link to="/forgotpassword" className='link'>Forgot Password</Link>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register-link'>
                            <p>Don't have an account?<Link className='link' to="/register">Register here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login
