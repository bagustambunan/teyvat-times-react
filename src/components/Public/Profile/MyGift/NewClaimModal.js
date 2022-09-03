import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/userSlice";
import GiftItemCircle from "../../../GiftItemCircle";

export default function NewClaimModal({ gifts, processGiftClaim }) {
  const user = useSelector(selectUser);
  const address = user.address;
  return (
    <div
      className="modal fade"
      id="newClaimModal"
      tabIndex="-1"
      aria-labelledby="newClaimModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newClaimModalLabel">
              New gift claim
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
                    <td>User Name</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>Street Name</td>
                    <td>{address.street}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{address.city}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>{address.state}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{address.country}</td>
                  </tr>
                  <tr>
                    <td>Postal Code</td>
                    <td>{address.postalCode}</td>
                  </tr>
                  <tr>
                    <td>Gift Items</td>
                    <td className="d-flex gap-2">
                      {gifts.map((gift) => (
                        <GiftItemCircle gift={gift} key={gift.giftID} />
                      ))}
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
