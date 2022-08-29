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
        {/* {transaction.status.transactionStatusID === 1 ? (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#qrModal"
          >
            <i className="bi bi-qr-code-scan me-2"></i>Show QR
          </button>
        ) : (
          ""
        )} */}
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
