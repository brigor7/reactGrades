import React, { Fragment } from 'react';

export default function GradesControl({ grades, onDelete, onPersist }) {
  console.log(onDelete);
  console.log(onPersist);
  return (
    <div>
      <p className="center">Notas disponiveis</p>
      <table className="striped">
        <thead>
          <th>Aluno</th>
          <th>Disciplina</th>
          <th>Avaliação</th>
          <th>Nota</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </thead>
        <tbody>
          {grades.map((grade) => {
            return (
              <tr key={grade.id}>
                <td>{grade.student}</td>
                <td>{grade.subject}</td>
                <td>{grade.type}</td>
                <td>{grade.value}</td>
                <td>&nbsp;</td>
                <td>{grade.isDeleted}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
