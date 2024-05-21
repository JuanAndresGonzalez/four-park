import React from 'react';
import logo from './assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

const Somos = () => {
  const navigate = useNavigate(); // Obtener la instancia de useNavigate

  const handleReservationClick = () => {
    navigate('/reserva'); // Navegar a la vista de reserva
  };


  return (
    <div className="somos">
      <nav>
        <img src={logo} alt="Four Parking logo" />
        <a href="/">Inicio</a>
        <a href="/parqueadero">Parqueaderos</a>
        <a href="/somos">¿Quienes somos?</a>
        <button onClick={handleReservationClick}>¡Reserva ahora!</button>
      </nav>
      <h1>¿Quiénes somos?</h1>
      <p>FOUR-PARK COLOMBIA es un sistema de información diseñado para estandarizar y mejorar la experiencia de estacionamiento en las ciudades de Colombia. Este sistema permite a los usuarios registrarse, seleccionar y reservar espacios de estacionamiento en cualquier ciudad del país, independientemente de si el parqueadero es cubierto, semi-cubierto o descubierto.

El sistema permite a los usuarios buscar parqueaderos mediante filtros, como la ubicación y el tipo de parqueadero. Una vez seleccionado el parqueadero, los usuarios pueden reservar un espacio y el sistema comenzará a contabilizar el tiempo para la facturación una vez se realiza la reserva. El sistema registra el momento de la reserva, la entrada del vehículo al parqueadero y la salida. El costo total se carga a la tarjeta de crédito del usuario registrado.</p>
    </div>
  );
};

export default Somos;
