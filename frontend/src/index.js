import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './page/HomePage';
import ProjectListPage from './page/ProjectListPage';
import WelcomePage from './page/WelcomePage';
import ProjectDetailPage from './page/ProjectDetailPage';
import AboutMePage from './page/AboutMePage';

const router = createBrowserRouter([
    {
      path: '/welcome',
      element: <WelcomePage />
    },
    {
      path: '/',
      element: <App />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: '/project',
          element: <ProjectListPage />,
        },
        {
          path: '/project/1',
          element: <ProjectDetailPage />
        },
        {
          path: '/about-me',
          element: <AboutMePage />,
        }
      ]
    },
    
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
