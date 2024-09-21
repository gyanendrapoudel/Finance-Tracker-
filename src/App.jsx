
import './App.css'
import Button from 'react-bootstrap/Button'
import { Route, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Transaction from './Pages/Transaction'
import Auth from './auth/Auth'
import { createContext } from 'react'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider >
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
            <Route
              path="transaction"
              element={
                <Auth>
                  <Transaction />
                </Auth>
              }
            />
          </Route>
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
