import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeRegistration from './employeeRegistration';
import Inise from './inise';
import AgregarParqueadero from './agregarParqueadero';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<EmployeeRegistration />} />
      <Route path="/inise" element={<Inise />} />{/*prueba de conexion*/}
      <Route path="/agregarParqueadero" element={<AgregarParqueadero />} />
    </Routes>
  </Router>
);
