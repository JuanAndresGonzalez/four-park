import React from 'react';
import logo from './assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

const Parqueadero = () => {
  const navigate = useNavigate(); // Obtener la instancia de useNavigate

  const handleReservationClick = () => {
    navigate('/reserva'); // Navegar a la vista de reserva
  };

  // Ejemplo de datos de parqueaderos, puedes reemplazar esto con datos reales o una llamada a una API
  const parqueaderos = [];

  return (
    <div className="parqueadero">
      <nav>
        <img src={logo} alt="Four Parking logo" />
        <a href="/">Inicio</a>
        <a href="/parqueadero">Parqueaderos</a>
        <a href="/somos">¿Quienes somos?</a>
        <a href="#precios">Precios</a>
        <button onClick={handleReservationClick}>¡Reserva ahora!</button>
      </nav>
      <h1>Información de Parqueaderos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Parqueadero</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Cantidad de Espacios</th>
            <th>Tipo</th>
            <th>Hora Apertura</th>
            <th>Hora Cierre</th>
            <th>Tarifa Moto por Minuto</th>
            <th>Tarifa Carro por Minuto</th>
            <th>Tarifa Plena Moto</th>
            <th>Tarifa Plena Carro</th>
          </tr>
        </thead>
        <tbody>
          {parqueaderos.map((parqueadero, index) => (
            <tr key={index}>
              <td>{parqueadero.nombre}</td>
              <td>{parqueadero.ciudad}</td>
              <td>{parqueadero.direccion}</td>
              <td>{parqueadero.cantidadEspacios}</td>
              <td>{parqueadero.tipo}</td>
              <td>{parqueadero.horaApertura}</td>
              <td>{parqueadero.horaCierre}</td>
              <td>{parqueadero.tarifaMotoPorMinuto}</td>
              <td>{parqueadero.tarifaCarroPorMinuto}</td>
              <td>{parqueadero.tarifaPlenaMoto}</td>
              <td>{parqueadero.tarifaPlenaCarro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parqueadero;
