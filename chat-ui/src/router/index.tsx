import {createBrowserRouter} from 'react-router-dom';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ChatList from '../pages/ChatList';
import MailList from "../pages/MailList";
import FileList from '../pages/FileList';
import Empty from '../pages/Empty';
import ChatContent from '../pages/ChatContent';
import React from "react";
import Personal from "../pages/Personal";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ChatList />,
        children: [
          {
            index: true,
            element: <Empty />
          },
          {
            path: 'chatContent/:id',
            element: <ChatContent />
          }
        ]
      },
      {
        path: '/mailList',
        element: <MailList />
      },
      {
        path: '/fileList',
        element: <FileList />
      },
      {
        path: '/personal',
        element: <Personal />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;
