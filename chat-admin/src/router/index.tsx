import React, {FC, lazy} from 'react';
import {RouteObject} from 'react-router';
import {useRoutes} from 'react-router-dom';
import { WrapperRouteComponent } from './config';
import LayoutPage from '../pages/Layout';

const Test = lazy(() => import('../pages/test'));


const routeList: RouteObject[] = [
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId=""/>,
    children: [
      {
        path: 'ashboard/workbeach',
        element: <WrapperRouteComponent element={<Test />} titleId="" />
      }
    ]
  }
]

const RenderRouter: FC = () => {
  return useRoutes(routeList)
}

export default RenderRouter
