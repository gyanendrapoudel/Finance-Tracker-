
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

import {  useUser } from './context/UserContext'
import { useEffect } from 'react'
import { loggedUser } from './utils/autoLogin'

function App() {
 const { user, setUser} = useUser()
 useEffect(() => {
   !user?._id && fetchUser()
 }, [user?._id])

 const fetchUser = async()=>{
    const {status,user}=await loggedUser()
    if(status==="success"){
      setUser(user)
    }
 }
  return (
    <>
      
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
      
    </>
  )
}

export default App
