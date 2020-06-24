import React from 'react';

export default function GradesControl({ grades, onDelete, onPersist }) {
  console.log(onDelete);
  console.log(onPersist);
  return (
    <div>
      <p className="center">Notas disponiveis</p>
      <span>{JSON.stringify(grades)}</span>
    </div>
  );
}
