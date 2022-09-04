import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import MySpending from '../../../components/Public/Profile/MyTransaction/MySpending';
import TransactionHistory from '../../../components/Public/Profile/MyTransaction/TransactionHistory';
import { apiUrl } from '../../../helpers/values';
import Transaction from '../../../models/Transaction';
import UserSpending from '../../../models/UserSpending';
import { selectToken } from '../../../store/tokenSlice';

export default function MyTransactionDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [spending, setSpending] = useState('');
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
  const fetchMySpending = () => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/user-spending`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setSpending(new UserSpending(
            res.data.userName,
            res.data.totalSpending,
          ));
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
          fetchMySpending();
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
      <MySpending spending={spending} />
      <TransactionHistory
        transactions={transactions}
        pagination={pagination}
        changePage={changePage}
      />
    </div>
  );
}
