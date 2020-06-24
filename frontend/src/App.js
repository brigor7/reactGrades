import React, { useState } from 'react';
import * as api from './api/apiService';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <h2 className="center">React Grades</h2>
      <h3 className="center">Controle de notas</h3>
      {allGrades.length > 0 && <p>Notas disponiveis</p>}
      {allGrades.length === 0 && <p>Carregando...</p>}
    </div>
  );
}
