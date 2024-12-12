import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage, HomePage, ProjectsPage, ErrorPage } from './pages';
import { Container, ThemeSwitcher } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
      <ThemeSwitcher />
    </Container>
  </React.StrictMode>
);
