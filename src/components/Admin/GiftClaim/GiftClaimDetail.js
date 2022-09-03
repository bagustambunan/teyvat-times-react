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
  const approveGiftClaim = (giftClaimID) => {
    fetch(`${apiUrl}/giftClaims/${giftClaimID}/approve`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("GiftClaim approved");
          navigate("/admin/giftClaims");
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
    fetch(`${apiUrl}/giftClaims/${giftClaimID}/reject`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success("GiftClaim rejected");
          navigate("/admin/giftClaims");
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
      {giftClaim.status.giftClaimStatusID === 2 ? (
        <div className="d-flex gap-3">
          <button
            onClick={() => approveGiftClaim(giftClaim.giftClaimID)}
            type="button"
            className="btn btn-success"
          >
            <i className="bi bi-check-circle me-2" />
            Approve
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
