import React, { useState } from "react";
import './authStyles.scss';
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuth } from '../../auth/useAuth';

const Login: React.FC = () => {
  const [loginID, setLoginID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  // updating contextAPI
  const { login }: any = useAuth()

  const loginDetails = (e: any) => {
    if (e.target.name === 'UserId') {
      setLoginID(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const loginPayload = { email: loginID, password: password }
    try {
      const res = await api.post("/auth/login", loginPayload)
      login(res.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login error', error);
      alert('Invalid User ID or password');
    }

    // if (loginID === 'Dipesh' && password === 'Test') {
    //   localStorage.setItem('auth', 'true');
    //   navigate('/dashboard')
    //   setLoginID('');
    //   setPassword('')
    //   console.log('loginID password', loginID, password);
    // } else {
    //   alert('InValid User ID or password')
    // }
  }

  return (
    <>
      <button onClick={() => navigate('/registration')}>Go To Registration Page</button>
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>User Login</h2>
          <label htmlFor="">User ID</label>
          <input type="text" value={loginID} name='UserId' onChange={loginDetails} />
          <label htmlFor="">Password</label>
          <input type="password" value={password} name='password' onChange={loginDetails} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
};

export default Login;
