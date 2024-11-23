import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { getTransactions } from '../utils/axios'
import { useUser } from '../context/UserContext'
const TransactionTable = () => {
    const {transactions} = useUser()
    const bal = transactions.reduce((acc, t) => {
      let num = Number(t.amount)
      return t?.tType === 'income' ? acc + num : acc - num
    }, 0)
  
  

  return (
    <Row className="p-2">
      <h4>Transaction History</h4>
      <table>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Out</th>
          <th>In</th>
        </tr>
        {transactions.map((t, i) => {
          return (
            <tr key={t?._id}>
              <td>{i + 1}</td>
              <td>{t?.createdAt}</td>
              <td>{t?.title}</td>

              {t?.tType === 'expenses' && (
                <>
                  <td> -${t?.amount}</td>
                  <td></td>
                </>
              )}
              {t?.tType === 'income' && (
                <>
                  <td></td>
                  <td> ${t?.amount}</td>
                </>
              )}
            </tr>
          )
        })}
        <tr>
          <th colSpan={2} className="text-center">
            Total
          </th>
          <th colSpan={3} className="text-center">
            ${bal}
          </th>
        </tr>
      </table>
    </Row>
  )
}
export default TransactionTable
