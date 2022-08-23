import React from 'react'

export default function CategorySelect() {
  return (
    <select className="form-select" name="category">
      <option value="0">All categories</option>
      <option value="1">Politic</option>
      <option value="2">Economy</option>
      <option value="3">Sport</option>
      <option value="4">Entartainment</option>
    </select>
  )
}
