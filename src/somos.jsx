import React from 'react';
import logo from './assets/img/logo.png';
import styles from './Somos.module.css';
import { useNavigate } from 'react-router-dom';

const Somos = () => {
  const navigate = useNavigate(); // Obtener la instancia de useNavigate

  const handleReservationClick = () => {
    navigate('/reserva'); // Navegar a la vista de reserva
  };

  const handleGerenteClick = () => {
    navigate('/gerente'); // Navegar a la vista de reserva
  };

  return (
    <div className={styles.Somos}>
      <nav>
        <div className={styles.logocontainer}>
          <img src={logo} alt="Four Parking logo" className={styles.logo} />
        </div>
        <div className={styles.navLinks}>
          <a href="/">Inicio</a>
          <a href="/parqueadero">Parqueaderos</a>
          <a href="/somos">¿Quiénes somos?</a>
          <button onClick={handleGerenteClick} className={styles.Gerentebutton}>Acceso Gerente</button>
          <button onClick={handleReservationClick} className={styles.Reservationbutton}>¡Reserva ahora!</button>
        </div>
      </nav>
      <div className={styles.BannerContainer}>
        <div className={styles.BannerText}>
          <h1 className={styles.MainBannerText}>¿Quiénes somos?</h1>
          <p>FOUR-PARK COLOMBIA es un sistema de información diseñado para estandarizar y mejorar la experiencia de estacionamiento en las ciudades de Colombia. Este sistema permite a los usuarios registrarse, seleccionar y reservar espacios de estacionamiento en cualquier ciudad del país, independientemente de si el parqueadero es cubierto, semi-cubierto o descubierto.</p>
          <p>El sistema permite a los usuarios buscar parqueaderos mediante filtros, como la ubicación y el tipo de parqueadero. Una vez seleccionado el parqueadero, los usuarios pueden reservar un espacio y el sistema comenzará a contabilizar el tiempo para la facturación una vez se realiza la reserva. El sistema registra el momento de la reserva, la entrada del vehículo al parqueadero y la salida. El costo total se carga a la tarjeta de crédito del usuario registrado.</p>
        </div>
      </div>
    </div>
  );
};

export default Somos;
