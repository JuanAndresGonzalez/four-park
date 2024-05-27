import React, { useState } from "react";
import logo from './assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

import './EmploRegister.css'; // Asegúrate de importar el archivo CSS

const EmploRegister = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    nombre: "",
    apellido: "",
    contraseña: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBackingClick = () => {
    navigate('/gerente'); 
  };

  return (
    <div className="reserva">
      <div className='logo-container'>
                <img src={logo} alt="Four Parking logo" className='logo' />
            </div>
        <div className="formcontainer">
            <h2>Registro de Empleados</h2>
            <form onSubmit={handleSubmit} className="formcontent">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Correo Electrónico" 
                  required 
                  className='input-field' 
                  value={input.email} 
                  onChange={handleInput} 
                />
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder="Nombre" 
                  required 
                  className='input-field' 
                  value={input.nombre} 
                  onChange={handleInput} 
                />
                <input 
                  type="text" 
                  name="apellido" 
                  placeholder="Apellido" 
                  required 
                  className='input-field' 
                  value={input.apellido} 
                  onChange={handleInput} 
                />
                <input 
                  type="password" 
                  name="contraseña" 
                  placeholder="Contraseña" 
                  required 
                  className='input-field' 
                  value={input.contraseña} 
                  onChange={handleInput} 
                />
                <button type="submit" className='registerF-button'>Registrar</button><br />
                <button type="button" className="linkButton" onClick={handleBackingClick}>Volver</button>
            </form>
        </div>
    </div>
  );
};

export default EmploRegister;
