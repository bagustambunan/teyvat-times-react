import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ReadHistory from '../../components/Public/ReadHistory';
import { apiUrl } from '../../helpers/values';
import UserPostActivity from '../../models/UserPostActivity';
import { selectToken } from '../../store/tokenSlice';

export default function ReadingHistoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState({
    s: '',
    category: '0',
    tier: '0',
    sortBy: 'date',
    sortOrder: 'desc',
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

  const token = useSelector(selectToken);
  const fetchActivities = () => {
    setIsLoading(true);
    fetch(
      `${apiUrl}/pub/reading-history?limit=${form.limit}&page=${form.page}`,
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
          const fetchedActivities = res.data.activities.map((item) => {
            const activity = new UserPostActivity(
              item.userPostActivityID,
              item.user,
              item.post,
              item.isLiked,
              item.isShared,
              item.viewsCount,
              item.createdAt,
              item.updatedAt,
            );
            return activity;
          });
          setActivities(fetchedActivities);
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
    fetchActivities();
  }, [form.page]);
  useEffect(() => {
    fetchActivities();
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <main className="col-12">
      <ReadHistory
        activities={activities}
        pagination={pagination}
        changePage={changePage}
      />
    </main>
  );
}
