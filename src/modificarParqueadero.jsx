import React, { useState } from 'react';

function ModificarParqueadero() {
  const [form, setForm] = useState({
    ciudad: '',
    direccion: '',
    capacidad: '',
    horario: '',
    telefono: '',
    email: '',
    codigo: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Modificar parqueadero</h1>
      <label>
        Ciudad:
        <input type="text" name="ciudad" onChange={handleChange} />
      </label><br />
      <label>
        Dirección:
        <input type="text" name="direccion" onChange={handleChange} />
      </label><br />
      <label>
        Capacidad:
        <input type="text" name="capacidad" onChange={handleChange} />
      </label><br />
      <label>
        Horario:
        <input type="text" name="horario" onChange={handleChange} />
      </label><br />
      <label>
        Teléfono:
        <input type="text" name="telefono" onChange={handleChange} />
      </label><br />
      <label>
        E-mail:
        <input type="text" name="email" onChange={handleChange} />
      </label><br />
      <label>
        Código:
        <input type="text" name="codigo" onChange={handleChange} />
      </label><br />
      <button type="submit">GUARDAR</button>
    </form>
  );
}

export default ModificarParqueadero;