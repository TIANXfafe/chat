import React from 'react';
import {useNavigate} from 'react-router-dom';

const Index = () => {
  const navigator = useNavigate();

  const handleLogin = () => {
    const loginTime = new Date();
    localStorage.setItem('loginTime', String(loginTime.getTime()));
    navigator("/");
  }

  return (
    <div>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Index;