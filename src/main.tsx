import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Home } from './Pages/Home/component.tsx';
import { Login } from './Pages/Login/component.tsx';
import { Register } from './Pages/Register/component.tsx';
import { FlipFlop } from './Pages/FlipFlop/component.tsx';
import App from './App.tsx';
import { GameDifficultySelector } from './Components/GameDifficultySelector';

import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';

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
      {
        path: '/gamedifficulty',
        element: <GameDifficultySelector />,
        caseSensitive: true,
      },
      {
        path: '/game',
        element: <FlipFlop />,
        caseSensitive: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
