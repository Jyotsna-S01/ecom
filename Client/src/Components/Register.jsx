import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Pages/Layout';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [answer,setAnswer] = useState("");
    const [address,setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/v1/auth/register", {
            name,
            email,
            password,
            address,
            phone,
            answer,
        })
        .then((res) =>{
            navigate("/login");
        })
        .catch((error) => console.log(err));
    };

  return (
    <Layout title={"Register page"}>
      <div className='register'>
            <div className='wrapper'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <label htmlFor='name'>
                            <strong>Name</strong>
                        </label>
                        <input type='text' placeholder='Enter your Name' autoComplete='off' name='name' value={name} onChange={(e) =>setName(e.target.value)}/>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input type='text' placeholder='Enter your Email' autoComplete='off' name='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input type='password' placeholder='Enter your Password' autoComplete='off' name='password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='phone'>
                            <strong>Phone</strong>
                        </label>
                        <input type='text' placeholder='Enter your Phone' autoComplete='off' name='phone' value={phone} onChange={(e) =>setPhone(e.target.value)}/>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='address'>
                            <strong>Address</strong>
                        </label>
                        <input type='text' placeholder='Enter your Address' autoComplete='off' name='address' value={address} onChange={(e) =>setAddress(e.target.value)}/>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='answer'>
                            <strong>Answer</strong>
                        </label>
                        <input type='text' placeholder='Enter your Answer' autoComplete='off' name='answer' value={answer} onChange={(e) =>setAnswer(e.target.value)}/>
                    </div>

                    <button type='submit'>Register</button>

                    <div className='login-link'>
                        <p style={{color:'black'}}>Already have an account?<Link className='link' to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Register
