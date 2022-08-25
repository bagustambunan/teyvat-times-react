import React from "react";

export default function Like({ isLiked, changeLike, totalLike }) {
  return (
    <button
      type="button"
      className="p-2 bg-white border rounded"
      onClick={() => changeLike()}
    >
      {isLiked === 1 ? (
      <i className="bi bi-heart-fill text-danger"></i>
      ) : (
      <i className="bi bi-heart"></i>
      )}
      {totalLike}
    </button>
  );
}
