import React from 'react'

export default function ButtonIcon({ text, icon }) {
  return (
    <button className="btn btn-primary"><i className={`bi ${icon}`}></i>{text}</button>
  )
}
