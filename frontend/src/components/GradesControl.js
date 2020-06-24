import React, { Fragment } from 'react';
import Action from './Action';

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

  const handleActionClick = (id, type) => {
    console.log(id);
    console.log(type);
  };

  return (
    <div className="container">
      {tableGrades.map(({ id, grades }) => {
        return (
          <table className="bordered striped centered" key={id}>
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Aluno</th>
                <th style={{ width: '20%' }}>Disciplina</th>
                <th style={{ width: '20%' }}>Avaliação</th>
                <th style={{ width: '20%' }}>Nota</th>
                <th style={{ width: '20%' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(
                ({ id, student, subject, type, value, isDeleted }) => {
                  return (
                    <tr key={id}>
                      <td>{student}</td>
                      <td>{subject}</td>
                      <td>{type}</td>
                      <td>{isDeleted ? '-' : value}</td>
                      <td>
                        <Action
                          onActionClick={handleActionClick}
                          id={id}
                          type={isDeleted ? 'add' : 'edit'}
                        />
                        {!isDeleted && (
                          <Action
                            onActionClick={handleActionClick}
                            id={id}
                            type="delete"
                          />
                        )}
                      </td>
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
