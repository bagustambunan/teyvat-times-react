import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Mora from "../../../components/Mora";
import { ParseCurrency } from "../../../helpers/Parser";
import { selectToken } from "../../../store/tokenSlice";

export default function PurchaseDetail({ subscription }) {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const noVoucher = {
    voucher: {
      amount: 0,
    }
  }
  const [userVoucher, setUserVoucher] = useState(noVoucher);
  const [form, setForm] = useState({
    code: "",
  });
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const fetchUserVoucher = (code) => {
    fetch('http://localhost:8080/pub/user_voucher/'+code, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setUserVoucher(res.data);
          toast.success("Voucher applied");
        }
        if (res.statusCode !== 200) {
          setUserVoucher(noVoucher);
          toast.error("Voucher not found");
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserVoucher(form.code);
  };


  const saveTransaction = () => {
    let dataToPost = {
      subscriptionID: subscription.subscriptionID,
    };
    if (userVoucher.voucher.amount !== 0) {
      dataToPost = {
        subscriptionID: subscription.subscriptionID,
	      userVoucherID: userVoucher.userVoucherID,
      }
    }

    fetch('http://localhost:8080/pub/transactions/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          console.log(res.data);
          toast.success('Transaction made successfully');
          navigate(`/profile/mytransaction/${res.data.transactionID}`);
        }
        if (res.statusCode !== 201) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div className="bg-white border rounded p-5">
      <h4 className="mb-3">Purchase Detail</h4>

      <div className="my-5">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Subscription duration</th>
              <td>+1 month</td>
            </tr>
            <tr>
              <th scope="row">Amount of mora you will get</th>
              <td>
                <Mora amount={subscription.coinsAmount} />
              </td>
            </tr>
            <tr>
              <th scope="row">Subtotal</th>
              <td>{ParseCurrency(subscription.price)}</td>
            </tr>
            <tr>
              <th scope="row">Voucher</th>
              <td>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Voucher code"
                      name="code"
                      value={form.code}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <button type="submit" className="btn btn-outline-secondary">
                      Apply
                    </button>
                  </div>
                </form>
              </td>
            </tr>
            {
              userVoucher.voucher.amount !== 0 ? (
                <tr>
                  <th scope="row">Discount from voucher</th>
                  <td>
                    <span className="text-success">{ParseCurrency(userVoucher.voucher.amount)}</span>
                  </td>
                </tr>
              ) : ("")
            }
          </tbody>
        </table>
      </div>

      <div className="d-flex align-items-center justify-content-between border rounded bg-light p-3">
        <div className="d-flex flex-column">
          <strong>Total</strong>
          <span className="text-primary">
            {
              subscription.price - userVoucher.voucher.amount > 0 ? (
                ParseCurrency(subscription.price - userVoucher.voucher.amount)
              ) : (ParseCurrency(0))
            }
          </span>
        </div>
        <button
          onClick={() => {saveTransaction()}}
          type="button"
          className="btn btn-primary"
        >
          <i className={`bi bi-credit-card me-2`} />
          Continue to payment
        </button>
      </div>
    </div>
  );
}
