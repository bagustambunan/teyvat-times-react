import React from 'react'

export default function SortSelect() {
  return (
    <select className="form-select" name="sortDate">
      <option value="1">Newest</option>
      <option value="2">Oldest</option>
    </select>
  )
}
