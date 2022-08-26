import React from 'react';

export default function TierRow({ tier, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        <span
          style={{ backgroundColor: tier.color }}
          className="p-2 text-white rounded"
        >
          {tier.name}
        </span>
      </td>
      <td>{tier.coinsRequired}</td>
    </tr>
  );
}
