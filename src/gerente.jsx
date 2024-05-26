import React from 'react';

function Gerente() {
  return (
    <div>
      <h1>Panel del Gerente</h1>
        <a href="/agregarParqueadero">Agregar un nuevo parqueadero</a><br />
        <a href="/emploRegister">Registrar Empleado</a><br />
        <a href="/ver-informe">Ver Informe</a>
    </div>
  );
}
export default Gerente;
