import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiUrl } from "../../../helpers/values";
import { selectToken } from "../../../store/tokenSlice";
import TitleSection from "../../../components/Public/Profile/TitleSection";
import Gift from "../../../models/Gift";
import UnclaimedGifts from "../../../components/Public/Profile/MyGift/UnclaimedGifts";

export default function MyGiftDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [myGifts, setMyGifts] = useState([]);
  const token = useSelector(selectToken);
  const fetchMyGifts = () => {
    setIsLoading(true);
    fetch(`${apiUrl}/pub/unclaimed-user-gifts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          const fetchedGifts = res.data.map((item) => {
            const gift = new Gift(
              item.gift.giftID,
              item.gift.name,
              item.gift.image,
              item.gift.stock,
            );
            return gift;
          });
          setMyGifts(fetchedGifts);
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
    fetchMyGifts();
  }, []);
  if (isLoading) {
    return "Loading...";
  }
  
  return (
    <div className="">
      <TitleSection text="Unclaimed Gifts" />
      {myGifts.length > 0 ? (
        <UnclaimedGifts gifts={myGifts} />
      ) : (
        <div className="alert alert-secondary">No data</div>
      )}
    </div>
  )
}
