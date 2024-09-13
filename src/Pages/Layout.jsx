import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import  Container  from "react-bootstrap/Container"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default Layout