import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gerente.css'; // Asegúrate de importar el archivo CSS

function Gerente() {
  const navigate = useNavigate();

  const handleBackingClick = () => {
    navigate('/'); // Ruta a la vista Home
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="gerente">
      <div className="formcontainer">
        <h1>Panel del Gerente</h1>
        <button className="actionButton" onClick={() => navigateTo('/agregarParqueadero')}>Agregar un nuevo parqueadero</button><br />
        <button className="actionButton" onClick={() => navigateTo('/emploRegister')}>Registrar Empleado</button><br />
        <button className="actionButton" onClick={() => navigateTo('/ver-informe')}>Ver Informe</button>
        <p>
          <button type="button" className="exitButton" onClick={handleBackingClick}>Salir</button>
        </p>
      </div>
    </div>
  );
}

export default Gerente;
