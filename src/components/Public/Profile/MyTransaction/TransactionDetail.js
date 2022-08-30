import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ParseCurrency, ParseDate } from "../../../../helpers/Parser";
import { selectToken } from "../../../../store/tokenSlice";
import QrModal from './QrModal'

export default function TransactionDetail({ transaction }) {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  return (
    <div>
      <QrModal transaction={transaction} />
      <div className="d-flex justify-content-between align-items-center">
        <h5>Transaction Detail</h5>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Date</th>
            <td>{ParseDate(transaction.createdAt)}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{transaction.status.name}</td>
          </tr>
          <tr>
            <th scope="row">Subscription</th>
            <td>{transaction.subscription.name}</td>
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
      {transaction.status.transactionStatusID === 1 ? (
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#qrModal"
          >
            <i className="bi bi-credit-card me-2"></i>Continue to payment
          </button>
        ) : (
          ""
        )}
    </div>
  );
}
