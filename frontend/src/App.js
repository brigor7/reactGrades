import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 1000);
    };
    getGrades();
  }, []);

  return (
    <div className="container">
      <h2 className="center">React Grades</h2>
      <h3 className="center">Controle de notas</h3>
      {allGrades.length > 0 && <p>Notas disponiveis</p>}
      {allGrades.length === 0 && <p>Carregando...</p>}
    </div>
  );
}
