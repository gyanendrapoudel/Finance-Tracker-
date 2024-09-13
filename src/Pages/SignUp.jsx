import  Container  from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FinancialTips from "../components/FinancialTips"
import Form from "../components/Form.jsx"
const SignUp = () => {

  return (
  
      <Container className="p-5 ">
        <Row className=" main  rounded fw-bolder" >
          <Col md={6}>
            <FinancialTips />
          </Col>
          <Col md={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    
  )
}
export default SignUp