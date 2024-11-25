import { useContext } from "react";
import { createContext, useState } from "react";
import { getTransactions } from "../utils/axios";

export const UserContext = createContext()

export const UserProvider =  ({children})=>{
    const [user, setUser] = useState()
    const [transactions, setTransactions] = useState([])
    const [show, setShow] = useState(false)
    const toggleModal = (value) => setShow(value)

    const fetchTransactions = async()=>{
            const {status, transactions} = await getTransactions()
            status==="success" && setTransactions(transactions)
           
    }
    return <UserContext.Provider  value={{user, setUser, transactions,fetchTransactions,toggleModal,show}}>
        {children}
    </UserContext.Provider>
}

export const useUser =()=> useContext(UserContext)