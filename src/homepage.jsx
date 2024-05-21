import React from 'react';
import logo from './assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Get useNavigate hook instance

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
    <div className="home">
      <nav>
        <img src={logo} alt="Four Parking logo" />
        <a href="/">Inicio</a>
        <a href="/parqueadero">Parqueaderos</a>
        <a href="#quienes-somos">¿Quienes somos?</a>
        <a href="#precios">Precios</a>
        <button onClick={handleReservationClick}>¡Reserva ahora!</button> {/* Adjusted button */}
      </nav>

      <div className="cta">
        <div className="cta-text">
          <p><h2>Parquea con facilidad en Colombia</h2></p><br />
          <p><h3>Bienvenido a FourPark, reserva tu espacio de estacionamiento en línea, sin complicaciones</h3></p>
          <button onClick={handleEmployeeRegistrationClick}>Únete ahora</button>
          <button onClick={handleIniseClick}>Ingresa ahora</button>
        </div>
        <div className="cta-image">
          {/* Asegúrate de tener una imagen en tu proyecto para usar aquí */}
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" />
        </div>
      </div>

      <div className="cta-grid">
        <div>
          <p><h2>¿Por qué elegirnos?</h2></p><br />
          <p><h3>Ofrecemos una solución innovadora que le permite encontrar, reservar y pagar parqueaderos en todo Colombia desde la comodidad de su casa</h3></p>
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" />
        </div>
        <div>
          <p><h2>Precios competitivos</h2></p><br />
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" />
        </div>
        <div>
          <p><h2>Cancelación gratis</h2></p><br />
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" />
        </div>
        <div>
          <p><h2>Amplia selección de parqueaderos</h2></p>
          <img src="/ruta/a/tu/imagen.jpg" alt="Descripción de la imagen" />
        </div>
      </div>
    </div>
  );
};

export default Home;
