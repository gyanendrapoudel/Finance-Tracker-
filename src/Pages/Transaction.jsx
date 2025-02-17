import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from '../components/FormInput'
import useForm from '../hooks/useForm'
import { createTransaction } from '../utils/axios'
import { toast } from 'react-toastify'
import TransactionTable from '../components/TransactionTable'
import { useUser } from '../context/UserContext'
import { useEffect } from 'react'
import { CustomModal } from '../components/CustomModal'
const Transaction = () => {
    const initialState = {
      tType:"",
      title:"",
      amount:'',
      tDate:""
    }
    const {form, setForm, handleOnChange} = useForm(initialState)
    const { fetchTransactions, toggleModal } = useUser()
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
       toast[status](message)
       if( status==="success"){
          setForm(initialState)
          fetchTransactions()
          // close the modal after submit successfully created a transaction
          toggleModal(false)
       }
    }
    useEffect(()=>{
     fetchTransactions()
    },[])
   
  return (
    <Container>
      <Row>
        <CustomModal>
          <Form className="w-100 mx-auto   " onSubmit={handleOnSubmit}>
            <div className="shadow-lg border border-1 p-5 mt-5 ">
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
              <Button variant="primary" type="submit" className="w-100" >
                Submit
              </Button>
            </div>
          </Form>
        </CustomModal>
      </Row>
      <TransactionTable />
    </Container>
  )
}
export default Transaction
