import React, { Fragment } from 'react';

export default function GradesControl({ grades, onDelete, onPersist }) {
  console.log(onDelete);
  console.log(onPersist);
  return (
    <div className="container">
      <table className="highlight centered">
        <thead>
          <th>Aluno</th>
          <th>Disciplina</th>
          <th>Avaliação</th>
          <th>Nota</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </thead>
        <tbody>
          {grades.map(({ id, student, subject, type, value, isDeleted }) => {
            return (
              <tr key={id}>
                <td>{student}</td>
                <td>{subject}</td>
                <td>{type}</td>
                <td>{value}</td>
                <td>&nbsp;</td>
                <td>{isDeleted}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
