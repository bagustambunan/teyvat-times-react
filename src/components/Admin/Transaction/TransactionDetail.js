import React from 'react'
import { ParseCurrency, ParseDate } from '../../../helpers/Parser'

export default function TransactionDetail({ transaction }) {
  console.log(transaction);
  return (
    <div>
      <table className="table">
          <tbody>
            <tr>
              <th scope="row">Date</th>
              <td>{ParseDate(transaction.createdAt)}</td>
            </tr>
            <tr>
              <th scope="row">User</th>
              <td>
                {transaction.user.name}
              </td>
            </tr>
            <tr>
              <th scope="row">Subscription</th>
              <td>
                {transaction.subscription.name}
              </td>
            </tr>
            <tr>
              <th scope="row">Subtotal</th>
              <td>{ParseCurrency(transaction.grossTotal)}</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>{ParseCurrency(transaction.netTotal)}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}