import React from 'react';
import logo from './assets/img/logo.png';
import camioneta from './assets/img/camioneta.png';
import dinero from './assets/img/dinero.png';
import calendario from './assets/img/calendario.png';
import mano from './assets/img/mano.png';
import styles from './Homepage.module.css';


import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  const handleReservationClick = () => {
    navigate('/reserva'); // Navigate to the reserva view
  };

  const handleEmployeeRegistrationClick = () => {
    navigate('/employeeRegistration'); // Navigate to the reserva view
  };

  const handleIniseClick = () => {
    navigate('/inise'); // Navigate to the reserva view
  };

  return (
    <div className={styles.Homepage}>
      <nav>
        <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className={styles.logo}/>
        </div>
        <div className={styles.navLinks}>
        <a href="/">Inicio</a>
        <a href="/parqueadero">Parqueaderos</a>
        <a href="/somos">¿Quiénes somos?</a>
        <button onClick={handleReservationClick} className={styles.Reservationbutton}>¡Reserva ahora!</button> 
        </div>
      </nav>

      <div className={styles.BannerContainer}>
      <img src={camioneta} alt="Camioneta suzuki" className={styles.SuzukiImage} />
          <p><h2>Parquea con facilidad en Colombia</h2></p><br />
          <p><h3>Bienvenido a FourPark, reserva tu espacio de estacionamiento en línea, sin complicaciones</h3></p>
          <button onClick={handleEmployeeRegistrationClick}>Únete ahora</button>
          <button onClick={handleIniseClick}>Ingresa ahora</button>
        </div>
        
      
| 
      <div className="cta-grid">
        <div>
          <p><h2>¿Por qué elegirnos?</h2></p><br />
          <p><h3>Ofrecemos una solución innovadora que le permite encontrar, reservar y pagar parqueaderos en todo Colombia desde la comodidad de su casa</h3></p>
        </div>
        <div>
          <img src={dinero} alt="dinero" />
          <p><h2>Precios competitivos</h2></p><br />
        </div>
        <div>
        <img src={calendario} alt="calendario" />
          <p><h2>Cancelación gratis</h2></p><br />
        </div>
        <div>
        <img src={mano} alt="mano" />
          <p><h2>Amplia selección de parqueaderos</h2></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
