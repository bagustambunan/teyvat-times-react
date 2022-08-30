import React from "react";
import { NavLink } from "react-router-dom";

export default function LinkIcon({ link, text, icon }) {
  return (
    <NavLink to={link}>
      <button type="button" className="btn btn-primary">
        <i className={`bi ${icon} me-2`} />
        {text}
      </button>
    </NavLink>
  );
}
