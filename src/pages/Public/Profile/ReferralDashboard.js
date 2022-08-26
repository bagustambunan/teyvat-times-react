import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ReferralInfo from '../../../components/Public/Profile/Referral/ReferralInfo'
import Referral from '../../../models/Referral';
import { selectToken } from '../../../store/tokenSlice';
import { selectUser } from '../../../store/userSlice';

export default function ReferralDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [referrals, setReferrals] = useState([]);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const fetchReferrals = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/pub/users/${user.userID}/downlines`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => (res.json()))
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedReferrals = res.data.map((item) => {
            const referral = new Referral(
              item.userID,
              item.name,
            );
            return referral;
          });
          setReferrals(fetchedReferrals);
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
    fetchReferrals();
  },[]);
  if (isLoading) {
    return "Loading..."
  }
  return (
    <ReferralInfo referrals={referrals}/>
  )
}
