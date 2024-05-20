import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const AgregarParqueadero = () => {
    const navigate = useNavigate(); // Get useNavigate hook instance
}

function agregarParqueadero() {
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
    <div>
        <h1>Agregar nuevo parqueadero</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Ciudad: 
        <input type="text" name="ciudad" onChange={handleChange} />
      </label><br></br>
      <label>
        Dirección:  
        <input type="text" name="direccion" onChange={handleChange} />
      </label><br></br>
      <label>
        Capacidad:  
        <input type="text" name="capacidad" onChange={handleChange} />
      </label><br></br>
      <label>
        Horario:    
        <input type="text" name="horario" onChange={handleChange} />
      </label><br></br>
      <label>
        Teléfono:   
        <input type="text" name="telefono" onChange={handleChange} />
      </label><br></br>
      <label>
        E-mail: 
        <input type="text" name="email" onChange={handleChange} />
      </label><br></br>
      <label>
        Código: 
        <input type="text" name="codigo" onChange={handleChange} />
      </label><br></br>
      <button type="submit">GUARDAR</button>
      <p><a href="/reserva">vista reserva</a></p>
    </form>
    </div>
  );
}

export default agregarParqueadero;