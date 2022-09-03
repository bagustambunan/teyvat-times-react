import React from 'react'
import GiftItemCircle from '../../../GiftItemCircle'

export default function MyClaimRow({ claim, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{claim.getCreatedAt()}</td>
      <td className="d-flex gap-2">
        {
          claim.giftClaimItems.map((claimItem) => (
            <GiftItemCircle gift={claimItem.gift} key={claimItem.giftClaimItemID} />
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
