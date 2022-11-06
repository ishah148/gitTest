import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider, createHashRouter, BrowserRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import HomePage from 'pages/HomePage';
import About from 'pages/About';
import App from 'App';
// const router = createHashRouter([
//   {
//     path: '/',
//     errorElement: <NotFound />,
//     element: <HomePage />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
