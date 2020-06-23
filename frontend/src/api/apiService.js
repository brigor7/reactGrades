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

  let nextId = grades.lenght + 1;
  let allCombination = [];
  allStudents.forEach((student) => {
    allSubjects.forEach((subject) => {
      allTypes.forEach((type) => {
        allCombination.push({
          student,
          subject,
          type,
        });
      });
    });
  });

  allCombination.forEach(({ student, subject, type }) => {
    const hasItem = grades.find((grade) => {
      return (
        grade.subject === subject &&
        grade.student === student &&
        grade.type === type
      );
    });
    if (!hasItem) {
      grades.push({
        id: nextId++,
        student,
        studentLowerCase: student.toLowerCase(),
        subject,
        subjectLowerCase: subject.toLowerCase(),
        type,
        typeLowerCase: type.toLowerCase(),
        value: 0,
        isDeleted: true,
      });
    }
  });

  grades.sort((a, b) => {
    a.typeLowerCase.localeCompare(b.typeLowerCase);
  });
  grades.sort((a, b) => {
    a.subjectLowerCase.localeCompare(b.subjectLowerCase);
  });
  grades.sort((a, b) => {
    a.studentLowerCase.localeCompare(b.studentLowerCase);
  });

  return allCombination;
}

export { getAllGrades };
