import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeRegistration from './employeeRegistration';
import Inise from './inise';
import AgregarParqueadero from './agregarParqueadero';
import Reserva from './reserva';
import './EmployeeRegistration.css';
import PasswordReset from './reiniciarPassword';
import UserRecovery from './recuperarUsuario';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<EmployeeRegistration />} />
      <Route path="/inise" element={<Inise />} />
      <Route path="/agregarParqueadero" element={<AgregarParqueadero />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path='/reinicioPassword' element={<PasswordReset />} />
      <Route path='/recuperarUsuario' element={<UserRecovery/>} />
    </Routes> 
  </Router>
);
