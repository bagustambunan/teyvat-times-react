import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiUrl } from "../../../../helpers/values";
import GiftItem from "./GiftItem";
import NewClaimModal from "./NewClaimModal";
import { selectToken } from "../../../../store/tokenSlice";
import { useSelector } from "react-redux";

export default function UnclaimedGifts({ gifts }) {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const processGiftClaim = () => {
    fetch(`${apiUrl}/pub/gift-claims`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Gift claim request created');
          window.location.href = "/profile/mygift";
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  return (
    <div>
      <div className="d-flex gap-2">
        {gifts.map((gift) => (
          <GiftItem gift={gift} key={gift.giftID} />
        ))}
      </div>
      <NewClaimModal gifts={gifts} processGiftClaim={processGiftClaim} />
      <button
        type="button"
        className="btn btn-primary mt-2"
        data-bs-toggle="modal"
        data-bs-target="#newClaimModal"
      >
        <i className="bi bi-gift me-2" />
        Claim All
      </button>
    </div>
  );
}
