import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createUser } from '../utils/axios'
import FormInput from './FormInput'
import { toast } from 'react-toastify'
import useForm from '../hooks/useForm'
import { useState } from 'react'
const initialState = {
  name:"",
  email:"",
  password:"",
  confirmPassword:""
}
function BasicExample() {
  const {form, setForm, handleOnChange} = useForm(initialState)
  const [btnDisable, setBtnDisable] = useState(false)
   console.log(form)
  const inputFields = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter Name',
      name: 'name',
      value: form.name,
    },

    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter Email',
      name: 'email',
      value: form.email,
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter Password',
      name: 'password',
      value: form.password,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      name: 'confirmPassword',
      value: form.confirmPassword,
    },
  ]
  

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    setBtnDisable(true)
    const{confirmPassword, ...rest}= form
    if(confirmPassword !== rest.password) {
      return toast.error("Password does not match!")
    }
  
      const {status, message} = await createUser(rest)
      toast[status](message)
      if (status === 'success') {
        setForm(initialState)
      }
      setBtnDisable(false)
  }


  return (
    <Form className="p-3 m-4 shadow-lg" onSubmit={handleOnSubmit}>
      {inputFields.map((field) => (
        <FormInput key={field.name} {...field} onChange={handleOnChange} />
      ))}
      <Button variant="primary" type="submit" className="w-100" disabled={btnDisable}>
        Submit
      </Button>
    </Form>
  )
}

export default BasicExample
