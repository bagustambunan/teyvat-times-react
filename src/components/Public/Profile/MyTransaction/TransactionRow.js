import React from 'react';
import { ParseDate } from '../../../../helpers/Parser'
import ButtonIcon from '../../../../components/ButtonIcon'

export default function TransactionRow({ transaction, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{ParseDate(transaction.createdAt)}</td>
      <td>{transaction.subscription.name}</td>
      <td>{transaction.status.name}</td>
      <td>
        {
          transaction.status.transactionStatusID === 2 ? (
            <ButtonIcon text="Show QR" icon="bi-qr-code-scan" />
          ) : ""
        }
      </td>
    </tr>
  )
}
