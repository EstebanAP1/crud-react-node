import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { store } from './store'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Login } from './routes/Login'
import { SignUp } from './routes/SignUp'
import { Dashboard } from './routes/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
