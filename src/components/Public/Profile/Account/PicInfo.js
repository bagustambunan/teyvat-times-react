import React from 'react'
import ButtonEdit from '../../../ButtonEdit'

export default function PicInfo({ image }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between">
        <img src={image.url} className="col-12 col-md-3 rounded-circle border"/>
        <div><ButtonEdit /></div>
      </div>
    </div>
  )
}