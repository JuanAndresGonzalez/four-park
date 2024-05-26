import React from 'react';

function Gerente() {
  return (
    <div>
      <h1>Panel del Gerente</h1>
        <a href="/agregarParqueadero">Registrar Parqueadero</a>
        <a href="/emploRegister">Registrar Empleado</a>
        <a href="/ver-informe">Ver Informe</a>
    </div>
  );
}

export default Gerente;
