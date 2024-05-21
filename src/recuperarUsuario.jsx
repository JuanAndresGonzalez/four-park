import React from 'react';
import logo from './assets/img/logo.png';
import { handleLoginClick } from './employeeRegistration';
import styles from './userRecovery.module.css';
import { useNavigate } from 'react-router-dom';

const UserRecovery = () => {
    const navigate = useNavigate(); 
    return (
    <div className={styles.UserRecovery}>
        <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className={styles.logo} />
        </div>
        <h2 className={styles.p}>Olvidé mi Usuario</h2>
        <div className={styles.formcontainer}>
        <div className={styles.formcontent}>
        <form>
        <p>Ingresa tu e-mail para recuperar tu Usuario</p>
        <input type="email" placeholder="Correo Electrónico" required /><br></br>
        <button type="submit">Enviar</button>
        </form> 
        <button type="button" onClick={() => handleLoginClick(navigate)} className={styles.linkButton}>Regresar al Inicio de Sesión</button>
        </div>
        </div>
    </div>
    );
};

export default UserRecovery;