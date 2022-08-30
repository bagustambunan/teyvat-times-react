import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import TransactionHistory from '../../../components/Public/Profile/MyTransaction/TransactionHistory';
import { apiUrl } from '../../../helpers/values';
import Transaction from '../../../models/Transaction';
import { selectToken } from '../../../store/tokenSlice';

export default function MyTransactionDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    limit: 10,
    page: 1,
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 1,
  });
  const changePage = (page) => {
    setPagination({ ...pagination, currentPage: page });
    setForm({ ...form, page });
  };
  const token = useSelector(selectToken);
  const fetchTransactions = () => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/transactions?limit=${form.limit}&page=${form.page}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
          setIsLoading(false);
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
  useEffect(() => {
    fetchTransactions();
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="">
      <TransactionHistory
        transactions={transactions}
        pagination={pagination}
        changePage={changePage}
      />
    </div>
  );
}
