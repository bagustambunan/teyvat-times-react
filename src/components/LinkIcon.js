import React from 'react'

export default function LinkIcon({ link, icon }) {
  return (
    <a href={link} className="btn btn-primary"><i className={`bi ${icon}`}></i>New</a>
  )
}
