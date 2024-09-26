



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IoLogIn } from 'react-icons/io5'
import { IoLogOut } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { useUser } from '../context/UserContext';

const Header=()=> {
  const {user, setUser} = useUser()
  const handleLogout = ()=>{
    // 1. Removing access token
   localStorage.removeItem("accessJWT")
  //  2. Setting empty user
      setUser({})
  }
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <MdDashboard className="fs-3 text-light" />
                  Dashboard
                </Link>
                <Link className="nav-link" to="/transaction" >
                  <MdOutlineAttachMoney className="fs-3 text-light" />
                  Transaction
                </Link>

                <Link className="nav-link" to="/" onClick={handleLogout}>
                  <IoLogOut className="fs-3 text-light" /> Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <IoCreateOutline className="fs-3 text-light" /> SignUp
                </Link>
                <Link className="nav-link" to="/">
                  <IoLogIn className="fs-3 text-light" />
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;