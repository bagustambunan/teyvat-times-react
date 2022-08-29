import React from "react";
import { ParseDate } from "../../../../helpers/Parser";
import ButtonIcon from "../../../../components/ButtonIcon";
import { NavLink } from "react-router-dom";

export default function TransactionRow({ transaction, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{ParseDate(transaction.createdAt)}</td>
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
