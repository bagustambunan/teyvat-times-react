import React from 'react'
import GiftRow from './GiftRow'

export default function GiftTable({ gifts }) {
  console.log(gifts);
  return (
    <table className="table table-striped w-100 my-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Gift</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {gifts.map((gift, index) => (
          <GiftRow
            key={gift.giftID}
            gift={gift}
            i={index + 1}
          />
        ))}
      </tbody>
    </table>
  )
}
