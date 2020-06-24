import React from 'react';

export default function Action({ id, type, onActionClick }) {
  const handleClick = (event) => {
    onActionClick(id, type);
  };
  return (
    <span
      key={id}
      id={id}
      className="material-icons"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {type}
    </span>
  );
}
