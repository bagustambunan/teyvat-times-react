import React from 'react';

export default function GiftItem({ gift }) {
  return (
    <div className="border border-2 rounded col-4 col-md-2 bg-light">
      <img src={gift.image.url} className="img-fluid" alt="" />
    </div>
  );
}
