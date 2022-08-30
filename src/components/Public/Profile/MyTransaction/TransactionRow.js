import React from "react";
import { ParseDateTime } from "../../../../helpers/Parser";
import { NavLink } from "react-router-dom";

export default function TransactionRow({ transaction, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{ParseDateTime(transaction.createdAt)}</td>
      <td>{transaction.subscription.name}</td>
      <td>{transaction.status.name}</td>
      <td>
        <NavLink
          to={`/profile/mytransaction/${transaction.transactionID}`}
          className="btn btn-sm"
        >
          <i className="text-primary bi bi-eye-fill" />
        </NavLink>
      </td>
    </tr>
  );
}
