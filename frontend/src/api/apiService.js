import Axios from 'axios';

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
