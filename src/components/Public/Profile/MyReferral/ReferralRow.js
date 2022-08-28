import React from 'react';

export default function ReferralRow({ referral, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{referral.name}</td>
      <td>-</td>
    </tr>
  );
}
