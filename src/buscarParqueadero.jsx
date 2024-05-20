import React, { useState } from 'react';

function BuscarParqueadero() {
  const [codigo, setCodigo] = useState('');

  const handleChange = e => {
    setCodigo(e.target.value);
  };

  const handleEliminar = e => {
    e.preventDefault();
    console.log(`Eliminar: ${codigo}`);
  };

  const handleModificar = e => {
    e.preventDefault();
    console.log(`Modificar: ${codigo}`);
  };

  return (
    <div>
      <h1>Buscar parqueadero</h1>
      <label>
        Código:
        <input type="text" value={codigo} onChange={handleChange} />
      </label><br />
      <button onClick={handleEliminar}>ELIMINAR</button>
      <button onClick={handleModificar}>MODIFICAR</button>
    </div>
  );
}

export default BuscarParqueadero;
