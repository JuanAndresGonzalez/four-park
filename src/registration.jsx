import React from 'react';
import logo from './assets/img/logo.png';

const RegistrationForm = () => {
    return (
    <div className="registration">
        <img src={logo} alt="Four Parking logo" />
        <h2>Regístrate</h2>
        <form>
        <input type="email" placeholder="Correo Electrónico" required /><br></br>
        <input type="text" placeholder="Nombre" required /><br></br>
        <input type="text" placeholder="Apellido" required /><br></br>
        <input type="text" placeholder="Usuario" required /><br></br>
        <input type="password" placeholder="Contraseña" required /><br></br><br></br>
        <button type="submit">Regístrate</button>
        </form>
        <p>¿Ya tienes una cuenta? <a href="/IniSe.jsx">Inicia sesión</a></p>
        <p>¿Trabajas con nosotros? <a href="/employeeRegistration.jsx">Regístrate como funcionario</a></p>
    </div>
    );
};

export default RegistrationForm;
