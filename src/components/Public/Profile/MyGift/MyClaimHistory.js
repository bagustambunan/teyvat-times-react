import React from "react";
import MyClaimRow from "./MyClaimRow";

export default function MyClaimHistory({ claims }) {
  return (
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
          <MyClaimRow
            claim={claim}
            i={i + 1}
            key={claim.giftClaimID}
          />
        ))}
      </tbody>
    </table>
  );
}
