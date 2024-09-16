import { useState } from "react";

  const handleOnChange=({e,form, setForm})=>{
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

const useForm = ()=>{
      const [form, setForm] = useState({})
    
      return {
        form,setForm, handleOnChange:(e)=>handleOnChange({e,form, setForm})
      }

}
export default useForm