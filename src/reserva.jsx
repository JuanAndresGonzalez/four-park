import React, { useState } from 'react';

const reserva = () => {
  const [form, setForm] = useState({
    email: '',
    idReserva: '',
    idParqueadero: '',
    espacioAsignado: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          ID de Reserva:
          <input type="text" name="idReserva" value={form.idReserva} onChange={handleChange} required />
        </label>
        <label>
          ID de Parqueadero:
          <input type="text" name="idParqueadero" value={form.idParqueadero} onChange={handleChange} required />
        </label>
        <label>
          Espacio Asignado:
          <input type="text" name="espacioAsignado" value={form.espacioAsignado} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default reserva;
