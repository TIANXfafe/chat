import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import checkLogin from './utils/checkLogin';
import {clearLocalStorage} from "./utils/storage";
import router from './router';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const Index = (props: any) => {
//   const navigator = useNavigate();
//
//   useEffect(() => {
//     if (checkLogin()) {
//     } else {
//       toast.error('登录超时，请重新登录!');
//       clearLocalStorage();
//       navigator('/login')
//     }
//   }, []);
//
//   return (
//   );
// };

root.render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
