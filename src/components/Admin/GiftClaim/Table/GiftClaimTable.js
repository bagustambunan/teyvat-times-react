import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Pagination from '../../../Pagination';
import TableController from './TableController';
import GiftClaimRow from './GiftClaimRow';
import GiftClaim from '../../../../models/GiftClaim';
import { selectToken } from '../../../../store/tokenSlice';
import { apiUrl } from '../../../../helpers/values';

export default function GiftClaimTable() {
  const token = useSelector(selectToken);
  const [giftClaims, setGiftClaims] = useState([]);
  const [form, setForm] = useState({
    status: 0,
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

  const fetchGiftClaims = () => {
    fetch(
      `${apiUrl}/gift-claims?status=${form.status}&limit=${form.limit}&page=${form.page}`,
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
          const fetchedGiftClaims = res.data.giftClaims.map((item) => {
            const giftClaim = new GiftClaim(
              item.giftClaimID,
              item.user,
              item.address,
              item.status,
              item.createdAt,
              item.updatedAt,
              item.giftClaimItems,
            );
            return giftClaim;
          });
          setGiftClaims(fetchedGiftClaims);
          setPagination({ ...pagination, totalPage: res.data.totalPage });
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
    fetchGiftClaims();
  }, [form]);
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    fetchGiftClaims();
  }, []);

  return (
    <>
      <TableController
        form={form}
        handleChange={handleChange}
      />
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">User</th>
            <th scope="col">Gift Items</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {giftClaims.map((giftClaim, index) => (
            <GiftClaimRow
              key={giftClaim.giftClaimID}
              claim={giftClaim}
              i={index + 1}
            />
          ))}
        </tbody>
      </table>
      <Pagination pagination={pagination} changePage={changePage} />
    </>
  );
}
