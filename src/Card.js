import React from 'react';

function Card({ name, children }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      {children}
    </div>
  );
}

export default Card;

