import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Summary from './Components/Summary.jsx';
import Attendance from './Components/Attendance.jsx';
import Academic from './Components/Academic.jsx';
import Analytics from './Components/Analytics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/summary",
        element: <Summary/>,
      },
      {
        path: "/attendance",
        element: <Attendance/>,
      },
      {
        path: "/academic",
        element: <Academic/>,
      },
      {
        path: "/analytics",
        element: <Analytics/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
