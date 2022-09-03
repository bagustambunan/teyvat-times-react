import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import TitleSection from '../../../components/Admin/TitleSection';
import GiftClaimDetail from '../../../components/Admin/GiftClaim/GiftClaimDetail';
import { apiUrl } from '../../../helpers/values';
import GiftClaim from '../../../models/GiftClaim';
import { selectToken } from '../../../store/tokenSlice';

export default function GiftClaimDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [giftClaim, setGiftClaim] = useState('');
  const token = useSelector(selectToken);

  const fetchGiftClaim = (giftClaimID) => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/gift-claims/${giftClaimID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setGiftClaim(
            new GiftClaim(
              res.data.giftClaimID,
              res.data.user,
              res.data.address,
              res.data.status,
              res.data.createdAt,
              res.data.updatedAt,
              res.data.giftClaimItems,
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
    if (params.giftClaimID !== undefined) {
      fetchGiftClaim(params.giftClaimID);
    }
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <TitleSection title="Gift Claim Detail" icon="bi-gift" />
      <GiftClaimDetail giftClaim={giftClaim} />
    </>
  );
}
