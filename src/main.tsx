import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home/component.tsx';
import { Login } from './Pages/Login/component.tsx';
import { Register } from './Pages/Register/component.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    caseSensitive: true,
    children: [
      {
        path: '/',
        element: <Home />,
        caseSensitive: true,
      },
      {
        path: '/login',
        element: <Login />,
        caseSensitive: true,
      },
      {
        path: '/register',
        element: <Register />,
        caseSensitive: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
