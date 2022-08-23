import React from 'react'

export default function SearchForm() {
  return (
    <div class="input-group mb-3">
      <input name="s" type="text" class="form-control" placeholder="Search..." />
      <button class="btn btn-outline-secondary" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  )
}
