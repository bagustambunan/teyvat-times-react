import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../../../helpers/values";
import { selectToken } from "../../../store/tokenSlice";
import GiftItemCircle from "../../GiftItemCircle";

export default function GiftClaimDetail({ giftClaim }) {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const deliverGiftClaim = (giftClaimID) => {
    fetch(`${apiUrl}/gift-claims/${giftClaimID}/deliver`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("Gift Claim delivered");
          navigate("/admin/gift-claims");
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const rejectGiftClaim = (giftClaimID) => {
    fetch(`${apiUrl}/gift-claims/${giftClaimID}/reject`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("Gift Claim rejected");
          navigate("/admin/gift-claims");
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
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Date</th>
            <td>{giftClaim.getCreatedAt()}</td>
          </tr>
          <tr>
            <th scope="row">User</th>
            <td>{giftClaim.user.name}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{giftClaim.address.street}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{giftClaim.status.name}</td>
          </tr>
          <tr>
            <th scope="row">Gift Items</th>
            <td className="d-flex gap-2">
              {giftClaim.giftClaimItems.map((claimItem) => (
                <GiftItemCircle
                  gift={claimItem.gift}
                  key={claimItem.giftClaimItemID}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      {giftClaim.status.giftClaimStatusID === 2 || giftClaim.status.giftClaimStatusID === 1 ? (
        <div className="d-flex gap-3">
          <button
            onClick={() => deliverGiftClaim(giftClaim.giftClaimID)}
            type="button"
            className="btn btn-success"
          >
            <i className="bi bi-check-circle me-2" />
            Deliver
          </button>
          <button
            onClick={() => rejectGiftClaim(giftClaim.giftClaimID)}
            type="button"
            className="btn btn-danger"
          >
            <i className="bi bi-x-circle me-2" />
            Reject
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}