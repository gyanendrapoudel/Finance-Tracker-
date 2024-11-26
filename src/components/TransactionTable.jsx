import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { deleteTransactions, getTransactions } from '../utils/axios'
import { useUser } from '../context/UserContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaPlusCircle } from 'react-icons/fa'
import { CustomModal } from './CustomModal'
import { toast } from 'react-toastify'
const TransactionTable = () => {
    const [searchTrans, setSearchTrans] = useState([])
    const [idDelTrans, setIdDelTrans] = useState([])
    const { transactions, toggleModal,fetchTransactions } = useUser()
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
  const handleCheck = (e)=>{
    const {checked, value} = e.target
    if(value==="all"){
        checked ? setIdDelTrans(searchTrans.map((item)=>item._id)) : setIdDelTrans([])
        return
    }
    if(checked){
        setIdDelTrans([...idDelTrans,value])
    }else{
      setIdDelTrans(idDelTrans.filter((ids) => ids !== value))
    }
  }
  const handleDelete = async()=>{
    if(confirm("Are you sure that you want to delete transactions")){

    
    const pending =  deleteTransactions(idDelTrans)
    toast.promise(pending, {
      pending:"Please wait..."
    })
    const {status, message} = await pending
    toast[status](message);
    status === 'success' && fetchTransactions()
    
  }
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
        <div className=" fs-5 my-1">
          <input
            type="checkbox"
            onChange={handleCheck}
            value={'all'}
            checked={idDelTrans.length === searchTrans.length}
            className="me-3 "
            style={{ transform: "scale(1.5)" }}
            
          />
          <label htmlFor="">Select All</label>
        </div>
        <div className=""></div>
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
                
                  <td className='d-flex justify-content-start '>
                    <input
                      className='me-2'
                      type="checkbox"
                      onChange={handleCheck}
                      value={t?._id}
                      checked={idDelTrans.includes(t?._id)}
                    />
                    {i + 1}{' '}
                  </td>
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
      {idDelTrans.length>0 && <Button variant='danger' className='w-100' onClick={handleDelete}>
        Delete
      </Button>}
    </>
  )
}
export default TransactionTable
