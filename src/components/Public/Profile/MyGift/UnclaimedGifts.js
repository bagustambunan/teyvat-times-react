import React from 'react'
import GiftItem from './GiftItem';

export default function UnclaimedGifts({ gifts }) {
  return (
    <div className="d-flex gap-2">
      {gifts.map((gift) => (
        <GiftItem gift={gift} key={gift.giftID} />
      ))}
    </div>
  )
}
