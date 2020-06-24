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

  const handleDeleteGrade = async (gradeDeleted) => {
    const isDeleted = await api.deleteGrade(gradeDeleted);
    if (isDeleted) {
      const deleteGradeIndex = allGrades.findIndex(
        (grade) => grade.id === gradeDeleted.id
      );

      /**Realiza a copia de objeto para um array em branco */
      const newGrades = Object.assign([], allGrades);

      /**Altera os valores de isDeleted e Value */
      newGrades[deleteGradeIndex].isDeleted = true;
      newGrades[deleteGradeIndex].value = 0;

      setAllGrades(newGrades);
    }
  };
  const handlePersistGrade = (id) => {
    console.log(`persist: ${id}`);
  };

  return (
    <div className="container">
      <h2 className="center">React Grades</h2>
      <h3 className="center">Controle de notas</h3>
      {allGrades.length === 0 && <Spinner />}

      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDeleteGrade}
          onPersist={handlePersistGrade}
        />
      )}
    </div>
  );
}
