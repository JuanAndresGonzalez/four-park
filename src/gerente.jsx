import React from 'react';

function Gerente() {
  return (
    <div>
      <h1>Panel del Gerente</h1>
      <ul>
        <li><a href="/agregarParqueadero">Registrar Parqueadero</a></li>
        <li><a href="/emploRegister">Registrar Empleado</a></li>
        <li><a href="/ver-informe">Ver Informe</a></li>
      </ul>
    </div>
  );
}

export default Gerente;
