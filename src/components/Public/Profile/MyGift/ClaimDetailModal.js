/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { apiUrl } from '../../../../helpers/values';
import GiftItem from './GiftItem';
import { selectToken } from '../../../../store/tokenSlice';

export default function ClaimDetailModal({ claim }) {
  const token = useSelector(selectToken);
  const completeGiftClaim = (giftClaimID) => {
    fetch(`${apiUrl}/pub/gift-claims/${giftClaimID}/complete`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Gift Claim completed');
          window.location.href = '/profile/mygift';
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };
  const confirmComplete = () => {
    if (confirm('Complete the gift claim? Make sure that you have received all the gifts claimed')) {
      completeGiftClaim(claim.giftClaimID);
    }
  };
  return (
    <div
      className="modal fade"
      id="claimDetailModal"
      tabIndex="-1"
      aria-labelledby="claimDetailModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="claimDetailModalLabel">
              Gift claim detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{claim.address.street}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status</th>
                    <td>{claim.status.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gift Items</th>
                    <td>
                      <div className="d-flex gap-2">
                        {claim.giftClaimItems.map((claimItem) => (
                          <GiftItem
                            gift={claimItem.gift}
                            key={claimItem.giftClaimItemID}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {claim.status.giftClaimStatusID === 3 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => confirmComplete()}
              >
                Complete Gift Claim
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
