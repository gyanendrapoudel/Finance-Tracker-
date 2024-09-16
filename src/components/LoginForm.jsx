import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from './FormInput'
import useForm from '../hooks/useForm'
const initialState={
  email:"",
  password:""
}
const LoginForm = () => {
  
  const {form , setForm, handleChange} = useForm(initialState)
    const loginFields = [
      {
        name: 'email',
        label: 'Email address',
        type: 'email',
        required: true,
        placeholder: 'Enter email',
        value: form.email
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        placeholder: 'Enter password',
        value:form.password
      },
    ]
   const handleOnSubmit = (e)=>{
      e.preventDefault();
      setForm(initialState)
   }
  return (
    <Form onSubmit={handleOnSubmit}>
      {
        loginFields.map((field)=>{
            return <FormInput key={field.name} label={field.label} {...field} onChange={handleChange}/>
        })
      }
     
      <Button variant="primary" type="submit" className="w-100 mt-2">
        Submit
      </Button>
    </Form>
  )
}
export default LoginForm
