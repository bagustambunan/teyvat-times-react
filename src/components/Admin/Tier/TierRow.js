import React from 'react';

export default function TierRow({ tier, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{tier.name}</td>
      <td>{tier.coinsRequired}</td>
    </tr>
  );
}
