import Container  from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import LoginForm from "../components/LoginForm"
import LoginSide from "../components/LoginSide"
import { Link } from "react-router-dom"

const Login = () => {

  return (
    <Container style={{ height: '80vh' }} className="  ">
      <Row className="  g-3 p-3 h-100">
        <Col md={6} className=" ">
          <LoginSide />
        </Col>
        <Col md={6} className="bg-light text-dark p-3  rounded shadow-lg ">
          <h4 className="text-center mt-5">User Login !</h4>
          <LoginForm />
          <div className="d-flex gap-2 mt-2">
            <div>Not Register?</div>
            <Link className="nav-link text-info" to="/signup">Register</Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Login