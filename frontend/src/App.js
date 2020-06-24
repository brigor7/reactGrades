import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 2000);
    };
    getGrades();
  }, []);

  const handleDeleteGrade = () => {};
  const handlePersistGrade = () => {};

  return (
    <div className="container">
      <h2 className="center">React Grades</h2>
      <h3 className="center">Controle de notas</h3>
      {allGrades.length === 0 && <Spinner />}

      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDeleteGrade={handleDeleteGrade}
          onPersistGrade={handlePersistGrade}
        />
      )}
    </div>
  );
}
