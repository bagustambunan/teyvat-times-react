import React from 'react';
import { ParseDate } from '../../../../helpers/Parser'

export default function TransactionRow({ transaction, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{ParseDate(transaction.createdAt)}</td>
      <td>{transaction.subscription.name}</td>
      <td>{transaction.status.name}</td>
      <td></td>
    </tr>
  )
}
