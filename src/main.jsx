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
import Home from './Pages/Home/Home.jsx'
import PrivateRoute from './PrivetRoute/PrivetRoute.jsx'
import AboutPage from './Pages/Aboutpage/AboutPage.jsx'

const roots = createBrowserRouter([
  
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
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
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          {
            path:"/Dashboard",
            element:<PrivateRoute><Welcome/></PrivateRoute>
          },
          {
            path:"/Dashboard/createtask",
            element:<PrivateRoute><CreateTask/></PrivateRoute>
          },
          {
            path:"/Dashboard/tasklist",
            element:<PrivateRoute><TaskList/></PrivateRoute>
          },
          {
            path:"/Dashboard/completedtask",
            element:<PrivateRoute><CompletedTask/></PrivateRoute>
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
