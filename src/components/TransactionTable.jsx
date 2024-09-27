import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { getTransactions } from '../utils/axios'

const TransactionTable = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetchTransaction()
        
    }, [transactions])
    const fetchTransaction = async()=>{
          const {transactions, message, status} = await getTransactions()
          status==="success" && setTransactions(transactions) 
    }
console.log(transactions)
  return (
    <Row className='p-2'>
      <h4>Transaction History</h4>
      {transactions.map((t,i) => {
        return (
          <Row key={i} className='my-1 py-2 bg-dark'>
            <Col>Title: {t?.title}</Col>
            <Col>Amount: ${t?.amount} </Col>
            <Col>Type: {t?.tType}</Col>
          </Row>
        )
      })}

      
    </Row>
  )
}
export default TransactionTable
