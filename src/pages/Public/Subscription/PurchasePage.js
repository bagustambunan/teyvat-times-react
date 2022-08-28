import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PurchaseDetail from '../../../components/Public/Subscription/PurchaseDetail';
import { selectToken } from '../../../store/tokenSlice';

export default function PurchasePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscription, setSubscription] = useState('');
  const token = useSelector(selectToken);

  const fetchSubscription = (subscriptionID) => {
    setIsLoading(true);
    fetch('http://localhost:8080/pub/subscriptions/'+subscriptionID, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setSubscription(res.data);
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
    if (params.subscriptionID !== undefined) {
      fetchSubscription(params.subscriptionID);
    }
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <PurchaseDetail subscription={subscription} />
  )
}
