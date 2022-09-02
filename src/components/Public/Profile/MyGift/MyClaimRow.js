import React from 'react'
import GiftItem from './GiftItem'

export default function MyClaimRow({ claim, i }) {
  console.log(claim);
  return (
    <tr>
      <td>{i}</td>
      <td>Date</td>
      <td className="d-flex gap-2">
        {
          claim.giftClaimItems.map((claimItem) => (
            <GiftItem gift={claimItem.gift} key={claimItem.giftClaimItemID} />
          ))
        }
      </td>
      <td>{claim.status.name}</td>
      <td>
        ACTION
      </td>
    </tr>
  )
}
