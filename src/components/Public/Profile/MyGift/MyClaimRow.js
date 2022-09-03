import React from "react";
import GiftItemCircle from "../../../GiftItemCircle";

export default function MyClaimRow({ claim, i, setSelectedClaim }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{claim.getCreatedAt()}</td>
      <td>
        <div className="d-flex gap-2">
          {claim.giftClaimItems.map((claimItem) => (
            <GiftItemCircle
              gift={claimItem.gift}
              key={claimItem.giftClaimItemID}
            />
          ))}
        </div>
      </td>
      <td>{claim.status.name}</td>
      <td>
        <button
          onClick={() => setSelectedClaim(claim)}
          type="button"
          className="btn btn-sm mt-2"
        >
          <i className="text-primary bi bi-eye-fill" />
        </button>
      </td>
    </tr>
  );
}
