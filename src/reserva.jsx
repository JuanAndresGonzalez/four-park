import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './Reserva.css'; // Import the CSS file
import logo from './assets/img/logo.png';

const Reserva = () => {
    const navigate = useNavigate(); // Get useNavigate hook instance
}

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
    <div className="reserva">
      <img src={logo} alt="Four Parking logo" />
      <div className="formcontainer">
        <div className="formcontent">
          <h2>Formulario de Reserva</h2>
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder='Correo Electrónico'
                value={form.email}
                onChange={handleChange}
                required
              />
            <br />
              <input
                type="text"
                name="idReserva"
                placeholder='ID de Reserva'
                value={form.idReserva}
                onChange={handleChange}
                required 
              />
            <br />
              <input
                type="text"
                name="idParqueadero"
                placeholder='Id de parqueadero'
                value={form.idParqueadero}
                onChange={handleChange}
                required
              />
            <br />
              <input
                type="text"
                name="espacioAsignado"
                placeholder='Espacio Asignado'
                value={form.espacioAsignado}
                onChange={handleChange}
                required
              />
            <br />
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reserva;
