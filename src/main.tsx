import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ProjectsPage, ErrorPage } from './pages';
import { Container } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
    </Container>
  </React.StrictMode>
);
