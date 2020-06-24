import React from 'react';

export default function Spinner() {
  return (
    <div>
      <p className="center">Carregando...</p>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}
