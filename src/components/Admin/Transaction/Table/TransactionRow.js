import React from 'react';
import { NavLink } from 'react-router-dom';
import { ParseDateTime } from '../../../../helpers/Parser';

export default function TransactionRow({ transaction, i, handleDelete }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{ParseDateTime(transaction.createdAt)}</td>
      <td>{transaction.user.name}</td>
      <td>{transaction.subscription.name}</td>
      <td>{transaction.status.name}</td>
      <td>
        <NavLink
          to={`/admin/transactions/${transaction.transactionID}`}
          className="btn btn-sm"
        >
          <i className="text-primary bi bi-eye-fill" />
        </NavLink>
      </td>
    </tr>
  );
}
