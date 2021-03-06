import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';
import ModalGrade from './components/ModalGrade';

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

  const handlePersistGrade = (grade) => {
    setSelectedGrade(grade);
    setIsModalOpen(true);
  };

  const handPersistData = async (formData) => {
    const { id, newValue } = formData;
    /**Atribuo uma nova cópia de allGrades para newGrades */
    const newGrades = Object.assign([], allGrades);
    /**Busco o elemento através do ir */
    const gradetoPersist = newGrades.find((grade) => {
      return grade.id === id;
    });
    gradetoPersist.value = newValue;
    /**Verificando se registro foi excluido ou editado */
    if (gradetoPersist.isDeleted) {
      gradetoPersist.isDeleted = false;
      await api.insertGrade(gradetoPersist);
    } else {
      await api.updateGrade(gradetoPersist);
    }
    console.log(gradetoPersist);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
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
      {isModalOpen && (
        <ModalGrade
          onSave={handPersistData}
          onClose={handleClose}
          selectedGrade={selectedGrade}
        />
      )}
    </div>
  );
}
