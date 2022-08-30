import React from 'react'

export default function Mora({ amount }) {
  return (
    <div className="d-flex align-items-center">
      <img src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Mora.png" alt="mora" height="30px"/>
      <span>{amount}</span>
    </div>
  )
}
