import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FieldPick } from './pages/FieldPick';
import { Quiz } from './pages/Quiz';
import { GameMap } from "./pages/GameMap";
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
  { path: 'quiz/:setData', element: <Quiz /> },
  {
    path: 'map',
    element: <GameMap />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
