import React from 'react'

export default function SearchForm() {
  return (
    <div className="input-group mb-3">
      <input name="s" type="text" className="form-control" placeholder="Search..." />
      <button className="btn btn-outline-secondary" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  )
}
