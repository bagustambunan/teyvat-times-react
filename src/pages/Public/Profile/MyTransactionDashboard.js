import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import TransactionHistory from '../../../components/Public/Profile/MyTransaction/TransactionHistory';
import Transaction from '../../../models/Transaction';
import { selectToken } from '../../../store/tokenSlice';

export default function MyTransactionDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const token = useSelector(selectToken);
  const fetchTransactions = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/pub/transactions`, {
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
            )
            return transaction;
          });
          setTransactions(fetchedTransactions);
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
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="my-3">
      <TransactionHistory transactions={transactions} />
    </div>
  )
}
