import Form from 'react-bootstrap/Form'
const FormInput = ({label, ...rest}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        // required={true}
        {...rest}
      />
    </Form.Group>
  )
}
export default FormInput