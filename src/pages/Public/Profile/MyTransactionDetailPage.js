import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import TransactionDetail from '../../../components/Public/Profile/MyTransaction/TransactionDetail';
import { apiUrl } from '../../../helpers/values';
import Transaction from '../../../models/Transaction';
import { selectToken } from '../../../store/tokenSlice';

export default function MyTransactionDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransaction] = useState('');
  const token = useSelector(selectToken);

  const fetchTransaction = (transactionID) => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/transactions/${transactionID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setTransaction(
            new Transaction(
              res.data.transactionID,
              res.data.user,
              res.data.subscription,
              res.data.status,
              res.data.grossTotal,
              res.data.netTotal,
              res.data.userVoucher,
              res.data.createdAt,
            ),
          );
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

  const params = useParams();
  useEffect(() => {
    if (params.transactionID !== undefined) {
      fetchTransaction(params.transactionID);
    }
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="my-3">
      <TransactionDetail transaction={transaction} />
    </div>
  );
}
