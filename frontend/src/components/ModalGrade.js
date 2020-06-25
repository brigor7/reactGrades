import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import * as api from '../api/apiService';

Modal.setAppElement('#root');

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const [gradeValue, setGradeValue] = useState(selectedGrade.value);
  const [gradeValidation, setGradeValidation] = useState({});
  const [erroMessage, setErroMessage] = useState('');

  useEffect(() => {
    const validation = api.getValidationFromGradeType(selectedGrade.type);
    setGradeValidation(validation);
  }, [selectedGrade.type]);

  return (
    <div>
      <Modal isOpen={true} />
    </div>
  );
}
