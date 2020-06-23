import React from 'react';
import * as api from './api/apiService';

export default function App() {
  console.log(api.getAllGrades());
  return (
    <div className="container">
      <h2>React Grades</h2>
    </div>
  );
}
