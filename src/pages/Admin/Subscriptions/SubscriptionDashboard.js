import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SubscriptionTable from '../../../components/Admin/Subscription/SubscriptionTable';
import TitleSection from '../../../components/Admin/TitleSection';
import Subscription from '../../../models/Subscription';
import { selectToken } from '../../../store/tokenSlice'

export default function SubscriptionDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);
  const token = useSelector(selectToken);
  const fetchSubscriptions = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/pub/subscriptions`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedSubscriptions = res.data.map((item) => {
            const subscription = new Subscription(
              item.subscriptionID,
              item.name,
              item.price,
              item.coinsAmount,
            )
            return subscription;
          });
          setSubscriptions(fetchedSubscriptions);
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
    <>
      <TitleSection title="Subscriptions" icon="bi-card-list" />
      <SubscriptionTable subscriptions={subscriptions} />
    </>
  )
}
