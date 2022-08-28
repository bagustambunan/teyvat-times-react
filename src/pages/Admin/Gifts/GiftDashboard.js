import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import GiftTable from '../../../components/Admin/Gift/GiftTable';
import TitleSection from '../../../components/Admin/TitleSection';
import Gift from '../../../models/Gift';
import { selectToken } from '../../../store/tokenSlice'

export default function GiftDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [gifts, setGifts] = useState([]);
  const token = useSelector(selectToken);
  const fetchGifts = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/pub/gifts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedGifts = res.data.map((item) => {
            const gift = new Gift(
              item.giftID,
              item.name,
              item.image,
              item.stock,
            )
            return gift;
          });
          setGifts(fetchedGifts);
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
    fetchGifts();
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <>
      <TitleSection title="Gifts" icon="bi-gift" />
      <GiftTable gifts={gifts} />
    </>
  )
}
