import React from 'react';
import { useNavigate } from 'react-router-dom';

function Gerente() {
  const navigate = useNavigate();

  const handleBackingClick = () => {
    navigate('/'); // Ruta a la vista Home
  };

  return (
    <div>
      <h1>Panel del Gerente</h1>
      <a href="/agregarParqueadero">Agregar un nuevo parqueadero</a><br />
      <a href="/emploRegister">Registrar Empleado</a><br />
      <a href="/ver-informe">Ver Informe</a>
      <p><button type="button" onClick={handleBackingClick}>Salir</button></p>
    </div>
  );
}

export default Gerente;
