import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from '../components/FormInput'
import useForm from '../hooks/useForm'
import { createTransaction } from '../utils/axios'
import { toast } from 'react-toastify'
const Transaction = () => {
    const initialState = {
      tType:"",
      title:"",
      amount:'',
      tDate:""
    }
    const {form, setForm, handleOnChange} = useForm(initialState)
    
    const formFields = [
      {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Title',
        value:form.title
      },
      {
        name: 'amount',
        type: 'text',
        required: true,
        label: 'Amount',
        value:form.amount
      },
      {
        name: 'tDate',
        type: 'date',
        required: true,
        label: 'Transaction Date',
        value:form.tDate,
      },
    ]
    const handleOnSubmit = async(e)=>{
        e.preventDefault();
     console.log(form)
      const pendingPromise =   createTransaction(form)
      toast.promise(pendingPromise,{
        pending:"creating transaction ..."
      })
      const {status, message,transaction} = await pendingPromise
       if(status==="success"){
        toast.success(message)
       }
        setForm(initialState)
      
    }
  return (
    <Form className="w-50 mx-auto pt-4" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="fromBasicEmail">
        <Form.Label>Transaction Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="tType"
          onChange={handleOnChange}
        >
          <option>--Select One--</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </Form.Select>
      </Form.Group>

      {formFields.map((field) => {
        return (
          <FormInput
            key={field.name}
            label={field.label}
            {...field}
            onChange={handleOnChange}
          />
        )
      })}
      <Button variant="primary" type="submit" className='w-100'>
        Submit
      </Button>
    </Form>
  )
}
export default Transaction
