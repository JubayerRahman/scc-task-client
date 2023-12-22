import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import AuthProvider from './Authprovider/AuthProvider.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import CreateTask from './Pages/CreateTask/CreateTask.jsx'
import TaskList from './Pages/TaskList/TaskList.jsx'
import CompletedTask from './Pages/completedTask/completedTask.jsx'
import Welcome from './Pages/Welcomepage/Welcome.jsx'

const roots = createBrowserRouter([
  
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/Dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"/Dashboard",
            element:<Welcome/>
          },
          {
            path:"/Dashboard/createtask",
            element:<CreateTask/>
          },
          {
            path:"/Dashboard/tasklist",
            element:<TaskList/>
          },
          {
            path:"/Dashboard/completedtask",
            element:<CompletedTask/>
          }
        ]
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={roots}/>
    </AuthProvider>
  </React.StrictMode>,
)
