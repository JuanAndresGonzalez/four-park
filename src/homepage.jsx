import React from 'react';
import logo from './assets/img/logo.png';

// Componente de la barra de navegación
const NavBar = () => (
  <nav>
    <img src={logo} alt="Four Parking logo" />
    <a href="/">Inicio  </a>
    <a href="/parqueaderos">Parqueaderos  </a>
    <a href="/quienes-somos">¿Quiénes Somos?  </a>
    <a href="/precios">Precios  </a>
    <button>¡Reserva Ahora! </button>
  </nav>
);

// Componente de la sección de bienvenida
const WelcomeSection = () => (
  <section>
    <h1>¡Parquea con facilidad en Colombia!</h1>
    <p>Bienvenido a Four Parking; reserva tu espacio de estacionamiento en línea, sin complicaciones.</p>
    <button>Únete ahora</button>
  </section>
);

// Componente de la sección "¿Por qué elegirnos?"
const WhyChooseUsSection = () => (
  <section>
    <h2>¿Por qué elegirnos?</h2>
    <p>Ofrecemos una solución innovadora que le permite encontrar, reservar y pagar parqueaderos en toda Colombia desde la comodidad de su teléfono inteligente.</p>
    <ul>
      <li>Precios Competitivos</li>
      <li>Cancelación gratis</li>
      <li>Amplia selección de parqueaderos</li>
    </ul>
  </section>
);

// Componente principal de la aplicación
const App = () => (
  <div>
    <NavBar />
    <WelcomeSection />
    <WhyChooseUsSection />
  </div>
);

export default App;
