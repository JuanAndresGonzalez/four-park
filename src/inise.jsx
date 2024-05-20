import React from 'react';
import logo from './assets/img/logo.png';

const loginForm = () => {
    return (
    <div className="login">
        <img src={logo} alt="Four Parking logo" />
        <h2>Iniciar Sesión</h2>
        <form>
        <input type="text" placeholder="Usuario" required /><br></br>
        <input type="password" placeholder="Contraseña" required /><br></br><br></br>
        <button type="submit">Iniciar Sesión</button>
        </form>
        <p><a href="/agregarParqueadero">¿Olvidaste tu contraseña?</a></p>
        <p><a href="/IniSe.jsx">¿Olvidaste tu usuario?</a></p>
    </div>
    );
};

export default loginForm;