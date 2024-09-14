import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormInput from './FormInput'

const LoginForm = () => {
    const loginFields = [
      {
        name: 'email',
        label: 'Email address',
        type: 'email',
        required: true,
        placeholder: 'Enter email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        placeholder: 'Enter password',
      },
    ]
  return (
    <Form>
      {
        loginFields.map((field)=>{
            return <FormInput key={field.name} label={field.label} {...field} />
        })
      }
     
      <Button variant="primary" type="submit" className="w-100 mt-2">
        Submit
      </Button>
    </Form>
  )
}
export default LoginForm
