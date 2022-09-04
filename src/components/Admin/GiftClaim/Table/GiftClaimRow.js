import React from 'react';
import { Link } from 'react-router-dom';
import GiftItemCircle from '../../../GiftItemCircle';

export default function TransactionRow({ claim, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{claim.getCreatedAt()}</td>
      <td>{claim.user.name}</td>
      <td className="d-flex gap-2">
        {
          claim.giftClaimItems.map((claimItem) => (
            <GiftItemCircle gift={claimItem.gift} key={claimItem.giftClaimItemID} />
          ))
        }
      </td>
      <td>{claim.status.name}</td>
      <td>
        <Link
          to={`/admin/gift-claims/${claim.giftClaimID}`}
          className="btn btn-sm"
        >
          <i className="text-primary bi bi-eye-fill" />
        </Link>
      </td>
    </tr>
  );
}
