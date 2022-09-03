import React from 'react'

export default function GiftItemCircle({ gift }) {
  return (
    <img src={gift.image.url} className="img-fluid border border-2 rounded-circle col-2 col-md-1 bg-light" />
  )
}
