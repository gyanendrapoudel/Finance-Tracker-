import { Navigate, replace } from "react-router-dom"

const Auth = ({children}) => {
    const isLogged = false
  return (isLogged? children : Navigate({to:"/", replace}))
}
export default Auth