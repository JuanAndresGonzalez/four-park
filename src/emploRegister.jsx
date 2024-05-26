import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    <div>
        <h2>Registro de Empleados</h2>
        <form>
            <input type="email" placeholder="Correo Electrónico" required className='input-field' /><br />
            <input type="text" placeholder="Nombre" required className='input-field'/><br />
            <input type="text" placeholder="Apellido" required className='input-field' /><br />
            <input type="password" placeholder="Contraseña" required /><br className='input-field' /><br />
            <button type="submit" className='registerF-button'>Registrar</button>
        </form>
        <p><button type="button" onClick={handleBackingClick}>Volver</button></p>
    </div>
  );
};

export default EmploRegister;
