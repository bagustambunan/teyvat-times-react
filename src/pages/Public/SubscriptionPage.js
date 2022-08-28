import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectToken } from '../../store/tokenSlice';
import SubscriptionWrapper from '../../components/Public/Subscription/SubscriptionWrapper'

export default function SubscriptionPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState('');
  const token = useSelector(selectToken);
  const fetchSubscriptions = () => {
    setIsLoading(true);
    fetch('http://localhost:8080/pub/subscriptions', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setSubscriptions(res.data);
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
    fetchSubscriptions();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <SubscriptionWrapper subscriptions={subscriptions} />
  );
}
