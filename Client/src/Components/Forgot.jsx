// import React, { useState } from 'react';
// import axios from 'axios';
// import Layout from '../Pages/Layout';
// import {useNavigate } from 'react-router-dom';

// const Forgot = () => {
//     const [email, setEmail] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3000/api/v1/auth/forgot-password", { email, newPassword })
//             .then((response) => {
//                     navigate("/login");
//             })
//             .catch(err => console.log(err));
//     };
//     return (
//         <Layout>
//             <div className='forgot'>
//                 <div className='wrapper'>
//                     <h2>Forgot Password</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className='input-box'>
//                             <input type='email' placeholder='Enter your Email' autoComplete='off' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className='input-box'>
//                             <input type='text' placeholder='Enter your Answer' autoComplete='off' name='answer' value={answer} onChange={(e) => setAnswer(e.target.value)} />
//                         </div>
//                         <div className='input-box'>
//                             <input type='text' placeholder='Enter your New Password' autoComplete='off' name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//                         </div>
//                         <button type='submit'>Set New Password</button>
//                         <div className='register-link'>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Forgot

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from "../Pages/Layout"


const Forgot = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/auth/forgot-password", { email, newPassword })
      .then(res => {
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout title={"Fogot password?"}>
      <div className='forgetpassword-container'>
        <div className='wrapper'>
          <h2>Forgot Password?</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-box'>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-box'>
              <input
                type="password"
                placeholder="Enter New Password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className='input-box'>
              <input
                type="text"
                placeholder="Enter Your Answer"
                autoComplete="off"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Forgot;