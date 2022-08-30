import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import VoucherTable from '../../../components/Admin/Voucher/VoucherTable';
import TitleSection from '../../../components/Admin/TitleSection';
import Voucher from '../../../models/Voucher';
import { selectToken } from '../../../store/tokenSlice';
import { apiUrl } from '../../../helpers/values';

export default function VoucherDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [vouchers, setVouchers] = useState([]);
  const token = useSelector(selectToken);
  const fetchVouchers = () => {
    setIsLoading(true);
    fetch(`${apiUrl}/vouchers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedVouchers = res.data.map((item) => {
            const voucher = new Voucher(
              item.voucherID,
              item.name,
              item.description,
              item.image,
              item.amount,
              item.code,
            );
            return voucher;
          });
          setVouchers(fetchedVouchers);
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
    fetchVouchers();
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <>
      <TitleSection title="Vouchers" icon="bi-ticket-perforated" />
      <VoucherTable vouchers={vouchers} />
    </>
  );
}
