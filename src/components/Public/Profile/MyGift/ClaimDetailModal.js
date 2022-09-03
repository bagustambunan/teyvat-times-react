import React from "react";
import GiftItemCircle from "../../../GiftItemCircle";
import GiftItem from "./GiftItem";

export default function ClaimDetailModal({ claim }) {
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => processGiftClaim()}
            >
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
