import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from '../../../Pagination';
import TableController from './TableController';
import TransactionRow from './TransactionRow';
import Transaction from '../../../../models/Transaction';
import { selectToken } from '../../../../store/tokenSlice';

export default function TransactionTable() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    status: 0,
    limit: 10,
    page: 1,
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 5,
  });

  const changePage = (page) => {
    setPagination({ ...pagination, currentPage: page });
    setForm({ ...form, page });
  };

  const fetchTransactions = () => {
    fetch(
      `http://localhost:8080/transactions?status=${form.status}&limit=${form.limit}&page=${form.page}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedTransactions = res.data.transactions.map((item) => {
            const transaction = new Transaction(
              item.transactionID,
              item.user,
              item.subscription,
              item.status,
              item.grossTotal,
              item.netTotal,
              item.userVoucher,
              item.createdAt,
            );
            return transaction;
          });
          setTransactions(fetchedTransactions);
          setPagination({ ...pagination, totalPage: res.data.totalPage });
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, [form]);
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <TableController
        form={form}
        handleChange={handleChange}
      />
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Subscription</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionRow
              key={transaction.transactionID}
              transaction={transaction}
              i={index + 1}
            />
          ))}
        </tbody>
      </table>
      <Pagination pagination={pagination} changePage={changePage} />
    </>
  );
}
