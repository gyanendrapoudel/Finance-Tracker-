import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from '../components/FormInput'
import useForm from '../hooks/useForm'
const Transaction = () => {
    const initialState = {
      tType:"",
      title:"",
      amount:'',
      tdate:""
    }
    const {form, setForm, handleOnChange} = useForm()
    
    const formFields = [
      {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Title',
      },
      {
        name: 'amount',
        type: 'text',
        required: true,
        label: 'Amount',
      },
      {
        name: 'tdate',
        type: 'date',
        required: true,
        label: 'Transaction Date',
      },
    ]
    console.log(form)
  return (
    <Form className="w-50 mx-auto pt-4">
      <Form.Group className="mb-3" controlId="fromBasicEmail">
        <Form.Label>Transaction Type</Form.Label>
        <Form.Select aria-label="Default select example" name='tType' onChange={handleOnChange}>
          <option>--Select One--</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </Form.Select>
      </Form.Group>

      {formFields.map((field) => {
        return <FormInput key={field.name} label={field.label} {...field}  onChange={handleOnChange}/>
      })}
    </Form>
  )
}
export default Transaction
