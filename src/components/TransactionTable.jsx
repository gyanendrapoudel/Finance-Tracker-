import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { getTransactions } from '../utils/axios'
import { useUser } from '../context/UserContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaPlusCircle } from 'react-icons/fa'
import { CustomModal } from './CustomModal'
const TransactionTable = () => {
    const [searchTrans, setSearchTrans] = useState([])
    const { transactions, toggleModal } = useUser()
    const bal = searchTrans.reduce((acc, t) => {
      let num = Number(t.amount)
      return t?.tType === 'income' ? acc + num : acc - num
    }, 0)
  
  const handleOnSearch = (e) => {
    const {value} = e.target
    const filterTrans =  transactions.filter((item)=>{
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
    
   setSearchTrans(filterTrans)
  }
   useEffect(() => {
     setSearchTrans(transactions)
   }, [transactions])

  return (
    <>
      <div className="d-flex justify-content-between my-4 pt-1">
        <div className="">{searchTrans.length} transactions found!</div>

        <Form.Control type="text" onChange={handleOnSearch} />
        <Button onClick={() => toggleModal(true)}>
          <FaPlusCircle /> Add New Transaction
        </Button>
      </div>
      <Row className="p-2">
        <h4>Transaction History</h4>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Out</th>
              <th>In</th>
            </tr>
          </thead>
          <tbody>
            {searchTrans.map((t, i) => {
              return (
                <tr key={t?._id}>
                  <td>{i + 1}</td>
                  <td>{(t?.createdAt).slice(0, 10)}</td>
                  <td>{t?.title}</td>

                  {t?.tType === 'expenses' && (
                    <>
                      <td className="out"> -${t?.amount}</td>
                      <td></td>
                    </>
                  )}
                  {t?.tType === 'income' && (
                    <>
                      <td></td>
                      <td className="in"> ${t?.amount}</td>
                    </>
                  )}
                </tr>
              )
            })}

            <tr>
              <th colSpan={2} className="text-center">
                Total
              </th>
              <th
                colSpan={3}
                className={bal > 0 ? 'text-center in ' : 'text-center out'}
              >
                ${bal}
              </th>
            </tr>
          </tbody>
        </table>
      </Row>
    </>
  )
}
export default TransactionTable
