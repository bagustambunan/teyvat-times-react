import React from 'react'

export default function Share({ isShared, changeShare }) {
  return (
    <button
      type="button"
      className="p-2 bg-white border rounded"
      onClick={() => changeShare()}
    >
      {isShared === 1 ? (
      <i className="bi bi-share-fill text-primary"></i>
      ) : (
      <i className="bi bi-share"></i>
      )}
      12
    </button>
  )
}
