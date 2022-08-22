import React from 'react';

export default function TitleSection({ title, icon }) {
  return (
    <section className="py-5"> 
      <h2><i className={`me-3 bi ${icon}`}></i>{title}</h2>
    </section>
  );
}
