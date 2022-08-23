import React from 'react'

export default function TierSelect() {
  return (
    <select className="form-select" name="tier">
      <option value="0">All tiers</option>
      <option value="1">Free</option>
      <option value="2">Premium</option>
      <option value="3">VIP</option>
    </select>
  )
}
