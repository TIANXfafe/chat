import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

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
