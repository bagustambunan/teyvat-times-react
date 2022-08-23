import React from 'react'

export default function SubmitIcon({ text, icon }) {
  return (
    <button type="submit" className="btn btn-primary">
      <i className={`bi ${icon} me-2`}></i>
      {text}
    </button>
  )
}
