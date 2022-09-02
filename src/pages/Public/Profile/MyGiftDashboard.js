import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiUrl } from "../../../helpers/values";
import { selectToken } from "../../../store/tokenSlice";
import TitleSection from "../../../components/Public/Profile/TitleSection";
import Gift from "../../../models/Gift";
import UnclaimedGifts from "../../../components/Public/Profile/MyGift/UnclaimedGifts";
import GiftClaim from "../../../models/GiftClaim";
import MyClaimHistory from "../../../components/Public/Profile/MyGift/MyClaimHistory";

export default function MyGiftDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [myGifts, setMyGifts] = useState([]);
  const [myClaims, setMyClaims] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchMyGifts = fetch(`${apiUrl}/pub/unclaimed-user-gifts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const fetchMyClaims = fetch(`${apiUrl}/pub/gift-claims`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Promise.all([fetchMyGifts,fetchMyClaims])
      .then(([myGiftsRes, myClaimsRes]) => Promise.all([
        myGiftsRes.json(),
        myClaimsRes.json(),
      ]))
      .then(([myGiftsRes, myClaimsRes]) => {
        // MY GIFTS
        if (myGiftsRes.statusCode === 200) {
          const fetchedGifts = myGiftsRes.data.map((item) => {
            const gift = new Gift(
              item.gift.giftID,
              item.gift.name,
              item.gift.image,
              item.gift.stock,
            );
            return gift;
          });
          setMyGifts(fetchedGifts);
        }
        if (myGiftsRes.statusCode !== 200) {
          toast.error(`Error: ${myGiftsRes.message}`);
        }

        // MY CLAIMS
        if (myClaimsRes.statusCode === 200) {
          const fetchedClaims = myClaimsRes.data.map((item) => {
            const claim = new GiftClaim(
              item.giftClaimID,
              item.user,
              item.address,
              item.status,
              item.giftClaimItems,
            );
            return claim;
          });
          setMyClaims(fetchedClaims);
        }
        if (myClaimsRes.statusCode !== 200) {
          toast.error(`Error: ${myClaimsRes.message}`);
        }
      })
      .catch(([fetchGiftsErr, fetchClaimsErr]) => {
        toast.error(`Error: ${fetchGiftsErr.message}`);
        toast.error(`Error: ${fetchClaimsErr.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
    
  }, []);
  if (isLoading) {
    return "Loading...";
  }
  
  return (
    <div>
      <div className="mb-5">
        <TitleSection text="Unclaimed Gifts" />
        {myGifts.length > 0 ? (
          <UnclaimedGifts gifts={myGifts} />
        ) : (
          <div className="alert alert-secondary">No data</div>
        )}
      </div>

      <div className="mb-5">
        <TitleSection text="Gift Claim History" />
        {myClaims.length > 0 ? (
          <MyClaimHistory claims={myClaims} />
        ) : (
          <div className="alert alert-secondary">No data</div>
        )}
      </div>
    </div>
  )
}
