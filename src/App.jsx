
import './App.css'
import Button from 'react-bootstrap/Button'
import { Route, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <h2>Hello</h2>
    <Button>Hello</Button>
    <ToastContainer/>
     <Routes>
      <Route  path='/' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
