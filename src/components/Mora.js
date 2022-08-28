import React from 'react'

export default function Mora({ amount }) {
  return (
    <div className="d-flex align-items-center">
      <img src="mora.webp" alt="mora" height="30px"/>
      <span>{amount}</span>
    </div>
  )
}
