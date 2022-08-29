import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import SubmitButton from "../components/Form/SubmitButton";

export default function PaymentPage() {
  const [form, setForm] = useState({
    transactionID: 0,
    amount: 0,
  });
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  const sendPayment = () => {
    const dataToPost = {
      transactionID: parseInt(form.transactionID, 10),
      amount: parseInt(form.amount, 10),
    };

    fetch("http://localhost:8080/open/payment", {
      method: "POST",
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("Payment success");
        }
        if (res.statusCode === 400) {
          toast.error(`Error: ${res.message}`);
        }
        else {
          toast.error(`Error: This payment is invalid`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  const params = useParams();
  useEffect(() => {
    if (params.transactionID !== undefined) {
      setForm({ ...form, ["transactionID"]: params.transactionID });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPayment();
    console.log(form);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="layout-main d-flex justify-content-center align-items-center">
        <div className="p-3 bg-white border rounded">
          <h5 className="text-center mt-1 mb-3">
            Payment
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="0"
                min="0"
                value={form.amount}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <SubmitButton text="Process payment" />
          </form>
        </div>
        
      </div>
    </>
  );
}
