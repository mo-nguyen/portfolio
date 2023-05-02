import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './page/HomePage';
import ProjectListPage from './page/ProjectListPage';
import WelcomePage from './page/WelcomePage';
import ProjectDetailPage from './page/ProjectDetailPage';
import AboutMePage from './page/AboutMePage';
import { loader as GetAllProjectsLoader } from './page/ProjectListPage';
import { loader as ProjectFormLoader, action as ProjectFormAction } from './page/ProjectForm';
import { loader as GetProjectByIdLoader } from './page/ProjectDetailPage';
import ProjectForm from './page/ProjectForm';

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
          loader: GetAllProjectsLoader,
        },
        {
          path: '/project/:projectId',
          element: <ProjectDetailPage />,
          loader: GetProjectByIdLoader,
        },
        {
          path: '/project/:projectId/edit',
          element: <ProjectForm />,
          loader: ProjectFormLoader,
          action: ProjectFormAction,
        },
        {
          path: '/about-me',
          element: <AboutMePage />,
        },
        {
          path: "project/add",
          element: <ProjectForm />,
          loader: ProjectFormLoader,
          action: ProjectFormAction,
        }
      ]
    },
    
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
