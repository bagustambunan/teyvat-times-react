import React from 'react';
import TitleSection from '../TitleSection';
import ReferralRow from './ReferralRow';

export default function ReferralInfo({ referrals }) {
  return (
    <div className="mb-5">
      <TitleSection text="My Referrals" />
      {
        referrals.length > 0 ? (
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
        ) : (
          <div className="alert alert-secondary" role="alert">
            No data
          </div>
        )
      }

    </div>
  );
}
