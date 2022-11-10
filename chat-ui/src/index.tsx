import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import checkLogin from './utils/checkLogin';
import {clearLocalStorage} from "./utils/storage";
import Login from './pages/Login';
import Layout from './pages/Layout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Index = (props: any) => {
  const navigator = useNavigate();

  useEffect(() => {
    if (checkLogin()) {
    } else {
      toast.error('登录超时，请重新登录!');
      clearLocalStorage();
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
    <Toaster />
  </BrowserRouter>
);
