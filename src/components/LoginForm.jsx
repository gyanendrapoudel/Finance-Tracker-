import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from './FormInput'
import useForm from '../hooks/useForm'
import { loginUser } from '../utils/axios'
import { toast } from 'react-toastify'
const initialState={
  email:"",
  password:""
}
const LoginForm = () => {
  
  const { form, setForm, handleOnChange } = useForm(initialState)
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
   const handleOnSubmit = async(e)=>{
      e.preventDefault();
   
     
      const pendingPromise = loginUser(form)
      toast.promise(pendingPromise,{
        pending: "logging..."
      })
      const result = await pendingPromise

      const {status, message, user, accessJWT} = result
      toast[status](message)
         setForm(initialState)
   }
    
  return (
    <Form onSubmit={handleOnSubmit}>
      {
        loginFields.map((field)=>{
            return (
              <FormInput
                key={field.name}
                label={field.label}
                {...field}
                onChange={handleOnChange}
              />
            )
        })
      }
     
      <Button variant="primary" type="submit" className="w-100 mt-2">
        Submit
      </Button>
    </Form>
  )
}
export default LoginForm
