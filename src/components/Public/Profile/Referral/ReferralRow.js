import React from 'react'

export default function ReferralRow({ referral, i }) {
  console.log(referral);
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{referral.name}</td>
      <td>-</td>
    </tr>
  )
}
