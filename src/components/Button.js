import React from 'react';

export default function Button({ text }) {
  return (
    <button
      type="button"
      className="btn btn-primary w-100"
    >
      {text}
    </button>
  );
}
