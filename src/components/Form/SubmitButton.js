import React from 'react';

export default function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="btn btn-success w-100"
    >
      {text}
    </button>
  );
}
