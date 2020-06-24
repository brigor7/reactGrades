import React, { Fragment } from 'react';

export default function GradesControl({ grades, onDelete, onPersist }) {
  /**Inicializando variaveis */
  const tableGrades = [];
  let currentStudent = grades[0].student;
  let currentSubject = grades[0].subject;
  let currentGrades = [];
  let id = 1;

  /**Percorrendo Grades e inserindo dados em tableGrade */
  grades.forEach((grade) => {
    if (grade.subject !== currentSubject) {
      tableGrades.push({
        id: id++,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrades,
      });
      /**Reiniciando variaveis */
      currentSubject = grade.subject;
      currentGrades = [];
    }
    if (grade.student !== currentStudent) {
      currentStudent = grade.student;
    }
    currentGrades.push(grade);
  });

  /**Após o loop, devemos inserir o último elemento */
  tableGrades.push({
    id: id++,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrades,
  });

  return (
    <div className="container">
      {tableGrades.map((tableGrade) => {
        return (
          <table className="highlight centered" key={tableGrade.id}>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Disciplina</th>
                <th>Avaliação</th>
                <th>Nota</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {tableGrade.grades.map(
                ({ id, student, subject, type, value, isDeleted }) => {
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
                }
              )}
            </tbody>
            <tfoot></tfoot>
          </table>
        );
      })}
    </div>
  );
}
