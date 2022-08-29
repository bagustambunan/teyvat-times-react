import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ParseCurrency, ParseDate } from "../../../helpers/Parser";
import { selectToken } from "../../../store/tokenSlice";

export default function TransactionDetail({ transaction }) {
  console.log(transaction);
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const approveTransaction = (transactionID) => {
    fetch("http://localhost:8080/transactions/" + transactionID + "/approve", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("Transaction approved");
          navigate("/admin/transactions");
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const rejectTransaction = (transactionID) => {
    fetch("http://localhost:8080/transactions/" + transactionID + "/reject", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("Transaction rejected");
          navigate("/admin/transactions");
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div>
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
            <th scope="row">User</th>
            <td>{transaction.user.name}</td>
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
      {transaction.status.transactionStatusID === 2 ? (
        <div className="d-flex gap-3">
          <button
            onClick={() => approveTransaction(transaction.transactionID)}
            type="button"
            className="btn btn-success"
          >
            <i className="bi bi-check-circle me-2"></i>Approve
          </button>
          <button
            onClick={() => rejectTransaction(transaction.transactionID)}
            type="button"
            className="btn btn-danger"
          >
            <i className="bi bi-x-circle me-2"></i>Reject
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
