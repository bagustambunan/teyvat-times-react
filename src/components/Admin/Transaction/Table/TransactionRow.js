import React from 'react';
import { ParseDate } from '../../../../helpers/Parser';

export default function TransactionRow({ transaction, i, handleDelete }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{ParseDate(transaction.createdAt)}</td>
      <td>{transaction.user.name}</td>
      <td>{transaction.subscription.name}</td>
      <td>{transaction.status.name}</td>
      <td>Action</td>
    </tr>
  );
}
