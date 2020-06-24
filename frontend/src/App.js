import React, { useState } from 'react';
import * as api from './api/apiService';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <h2>React Grades</h2>
    </div>
  );
}
