import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { apiUrl } from '../../../helpers/values';
import { selectToken } from '../../../store/tokenSlice';
import UserSubscription from '../../../models/UserSubscription';
import UserSubscriptionHistory from '../../../components/Public/Profile/MySubscription/UserSubscriptionHistory';

export default function MySubscriptionDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [mySubs, setMySubs] = useState([]);
  const token = useSelector(selectToken);
  const [form, setForm] = useState({
    limit: 1,
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
  const fetchMySubs = () => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/user-subscriptions?limit=${form.limit}&page=${form.page}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedMySubs = res.data.userSubscriptions.map((item) => {
            const userSub = new UserSubscription(
              item.userSubscriptionID,
              item.user,
              item.subscription,
              item.dateStart,
              item.dateEnded
            );
            return userSub;
          });
          setMySubs(fetchedMySubs);
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
    fetchMySubs();
  }, [form]);
  useEffect(() => {
    fetchMySubs();
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="my-3">
      <UserSubscriptionHistory userSubscriptions={mySubs} pagination={pagination} changePage={changePage} />
    </div>
  )
}
