import React from 'react';

export default function TierBox({ tier }) {
  return (
    <span
      style={{ backgroundColor: tier.color }}
      className="small text-white p-2 rounded text-decoration-none me-3"
    >
      {tier.name}
    </span>
  );
}
