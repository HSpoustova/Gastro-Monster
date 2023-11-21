import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FieldPick } from './pages/FieldPick';
import { Quiz } from './pages/Quiz';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'fieldPick',
    element: <FieldPick />,
  },
  { path: 'quiz', element: <Quiz /> },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
