import  Container  from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FinancialTips from "../components/FinancialTips"


const SignUp = () => {

  return (
    <div className="wrapper ">
      <Container className="p-5">
        <Row className=" main rounded fw-bolder">
          <Col>
            <FinancialTips />
          </Col>
          <Col>Form</Col>
        </Row>
      </Container>
    </div>
  )
}
export default SignUp