import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'react-bootstrap'

import { reportWebVitals } from './reportWebVitals';

import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { TopNavBar } from './widgets/TopNavBar';

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <TopNavBar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
