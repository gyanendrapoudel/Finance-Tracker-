



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header=()=> {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              SignUp
            </Link>
            <Link className="nav-link" to="/">
              Login
            </Link>
            <Link className="nav-link" to="/">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;