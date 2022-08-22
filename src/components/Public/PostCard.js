import React from "react";

export default function PostCard() {
  return (
    <div className="card">
      <img src="default.png" className="card-img-top" alt="..." />
      <div className="card-body">

        <h5 className="card-title">Post title</h5>

        <p className="fst-italic text-muted small">Date - time</p>

        <p className="card-text">Post summary</p>


        <div>
          <a href="#" className="small text-white bg-warning p-2 rounded text-decoration-none me-3">Premium</a>
          <a href="#" className="small text-white bg-info p-2 rounded text-decoration-none">Entertainment</a>
        </div>
        
      </div>
    </div>
  );
}
