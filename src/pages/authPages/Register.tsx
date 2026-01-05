import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authStyles.scss";
import api from "../../api/axios";

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const registerDetails = (e: any) => {
    if (e.target.name === 'userId') {
      setUserID(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setName(e.target.value);
    }
  }

  const resetForm = () => {
    setName('');
    setUserID('');
    setPassword('');
  }

  const handleRegistration = async (e: any) => {
    e.preventDefault();
    const registerationPayload = { name: name, email: userID, password: password }
    try {
      const res = await api.post("/auth/register", registerationPayload);
      console.log('registration response', res.data);
      resetForm();
      res.data && alert('Registration Successful! Please Login');
      navigate('/login');
    } catch (error: any) {
      console.error('Registration error', error);
      resetForm();
      alert(error.message);
    }

  }

  return (
    <>
      <button onClick={() => navigate('/')}>Go To Login Page</button>
      <div className="login-container">
        <form className="login-box" onSubmit={handleRegistration}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Enter Your Name" value={name} onChange={registerDetails} />

          <label>User ID</label>
          <input name="userId" type="text" placeholder="Enter Your User ID" value={userID} onChange={registerDetails} />
          <label>Set Password</label>

          <input name="password" type="text" placeholder="Enter Your New Password" value={password} onChange={registerDetails} />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
};

export default Register;
