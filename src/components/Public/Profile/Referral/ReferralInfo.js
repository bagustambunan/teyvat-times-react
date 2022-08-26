import React from 'react';
import ReferralRow from './ReferralRow';

export default function ReferralInfo({ referrals }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>My Referrals</h5>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Spent amount</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral, i) => (
            <ReferralRow referral={referral} i={i + 1} key={referral.userID} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
