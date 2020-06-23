import axios from 'axios';

const API_URL = 'http://localhost:3001/grade/';

const GRADE_VALIDATION = [
  {
    id: 1,
    gradeType: 'Exercícios',
    minValue: 0,
    maxValux: 10,
  },
  {
    id: 2,
    gradeType: 'Trabalho Prático',
    minValue: 0,
    maxValux: 40,
  },
  {
    id: 3,
    gradeType: 'Desafio',
    minValue: 0,
    maxValux: 50,
  },
];

async function getAllGrades() {
  const res = await axios.get(API_URL);

  const grades = res.data.grades.map((grade) => {
    const { student, subject, type } = grade;
    return {
      ...grade,
      studentLowerCase: student.toLowerCase(),
      subjectLowerCase: subject.toLowerCase(),
      typeLowerCase: type.toLowerCase(),
      isDeleted: false,
    };
  });
  //Não traz alunos repetidos
  let allStudents = new Set();
  grades.forEach((grade) => allStudents.add(grade.student));
  allStudents = Array.from(allStudents);

  let allSubjects = new Set();
  grades.forEach((grade) => allSubjects.add(grade.subject));
  allSubjects = Array.from(allSubjects);

  let allTypes = new Set();
  grades.forEach((grade) => allTypes.add(grade.type));
  allTypes = Array.from(allTypes);

  return allSubjects;
}

export { getAllGrades };
