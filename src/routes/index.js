import { Navigate, useRoutes } from 'react-router';
import SfLayout from '../layout/SfLayout';
import Home from 'app/pages/storefront/Home/Loadable';
import NotFoundPage from '../app/pages/NotFoundPage/Loadable';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <SfLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '*',
      children: [
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
