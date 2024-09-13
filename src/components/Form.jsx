import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createUser } from '../utils/axios'
import FormInput from './FormInput'
import { Placeholder } from 'react-bootstrap'
import { useState } from 'react'
import { toast } from 'react-toastify'

function BasicExample() {
  const inputFields = [
    { label: 'Name', type: 'text', Placeholder: 'Enter Name', name: 'name' },
    {
      label: 'Email',
      type: 'email',
      Placeholder: 'Enter Email',
      name: 'email',
    },
    {
      label: 'Password',
      type: 'password',
      Placeholder: 'Enter Password',
      name: 'password',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      Placeholder: 'Confirm Password',
      name: 'confirmPassword',
    },
  ]
  const [form, setForm] = useState({})

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    const{confirmPassword, ...rest}= form
    if(confirmPassword !== rest.password) {
      return toast.error("Password does not match!")
    }
  
      const {status, message} = await createUser(rest)
      toast[status](message)
  }


  return (
    <Form className="p-3 m-4 shadow-lg" onSubmit={handleOnSubmit}>
      {inputFields.map((field) => (
        <FormInput key={field.email} {...field} onChange={handleOnChange} />
      ))}
      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  )
}

export default BasicExample
