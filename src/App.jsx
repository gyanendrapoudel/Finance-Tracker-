
import './App.css'
import Button from 'react-bootstrap/Button'
import { Route, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Layout from './Pages/Layout'

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
