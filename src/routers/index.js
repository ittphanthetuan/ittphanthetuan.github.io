/* eslint-disable react/display-name */
import React, { Suspense, lazy } from 'react';
import { PATH_DASHBOARD } from 'routers/path'
import Layout from 'components/Layout';
import { useRoutes } from 'react-router-dom';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <Suspense fallback={<div>content...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Dashboard = Loadable(lazy(() => import('pages/DashBoard')));
const About = Loadable(lazy(() => import('pages/About')));
const Detail = Loadable(lazy(() => import('pages/Detail')));

export default function Routers() {
  return useRoutes([
    { 
      path: PATH_DASHBOARD.root,
      element: <Layout />,
      children: [
        { element: <Dashboard />, index: true },
        { element: <About />, path: PATH_DASHBOARD.about },
        { element: <Detail />, path: PATH_DASHBOARD.detail },
      ]
    }
  ])
}