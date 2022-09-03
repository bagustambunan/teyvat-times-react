import React, { useEffect, useState } from "react";
import ClaimDetailModal from "./ClaimDetailModal";
import MyClaimRow from "./MyClaimRow";

export default function MyClaimHistory({ claims }) {
  const [selectedClaim, setSelectedClaim] = useState(null);

  useEffect(() => {
    if (selectedClaim !== null) {
      var claimDetailModal = new bootstrap.Modal(document.getElementById("claimDetailModal"), {});
      claimDetailModal.show();
    }
  },[selectedClaim]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Gift Items</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, i) => (
            <MyClaimRow claim={claim} i={i + 1} key={claim.giftClaimID} setSelectedClaim={setSelectedClaim} />
          ))}
        </tbody>
      </table>
      {
        selectedClaim !== null ? (
          <ClaimDetailModal claim={selectedClaim} />
        ) : ("")
      }
    </>
  );
}
