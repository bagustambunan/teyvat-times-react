import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { apiUrl } from '../../../helpers/values';
import { selectToken } from '../../../store/tokenSlice';
import UserVoucher from '../../../models/UserVoucher';
import VoucherInfo from '../../../components/Public/Profile/MyVoucher/VoucherInfo';

export default function MyVoucherDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [myVouchers, setMyVouchers] = useState([]);
  const token = useSelector(selectToken);
  const fetchMyVouchers = () => {
    setIsLoading(true);
    fetch(
      `${apiUrl}/pub/user-vouchers`,
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
          const fetchedVouchers = res.data.map((item) => {
            const voucher = new UserVoucher(
              item.userVoucherID,
              item.userID,
              item.voucher,
              item.dateExpired,
              item.isUsed,
            );
            return voucher;
          });
          setMyVouchers(fetchedVouchers);
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
    fetchMyVouchers();
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div className="">
      <VoucherInfo vouchers={myVouchers} />
    </div>
  );
}
