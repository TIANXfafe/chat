import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import checkLogin from './utils/CheckLogin';
import Login from './pages/Login';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Index = () => {
  const navigator = useNavigate();

  useEffect(() => {
    if (checkLogin()) {
      console.log('已经登录!');
    } else {
      console.log('未登录!');
      navigator('/login')
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<Layout />} />
    </Routes>
  );
};

root.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
);