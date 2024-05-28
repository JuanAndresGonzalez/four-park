import React from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Registration.module.css";

const Registration = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/inise");
  };
  return (
    <div className={styles.registration}>
      <div className={styles.logo - container}>
        <img src={logo} alt="Four Parking logo" className="logo" />
      </div>
      <div className={styles.form - container}>
        <div className={styles.form - content}>
          <h2>Regístrate</h2>
          <form>
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              className="input-field"
            />
            <br />
            <input
              type="text"
              placeholder="Nombre"
              required
              className="input-field"
            />
            <br />
            <input
              type="text"
              placeholder="Apellido"
              required
              className="input-field"
            />
            <br />
            <input type="password" placeholder="Contraseña" required />
            <br className="input-field" />
            <br />
            <button type="submit" className={styles.registerF - button}>
              Regístrate
            </button>
          </form>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={handleLoginClick}
              className={styles.rout - buttonER}
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export const handleLoginClick = (navigate) => {
  navigate("/inise");
};

export default Registration;
