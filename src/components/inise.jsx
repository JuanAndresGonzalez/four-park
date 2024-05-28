import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import styles from "../styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    navigate("/reinicioPassword");
  };

  const handleUserRecoveryClick = () => {
    navigate("/recuperarUsuario");
  };

  return (
    <div className={styles.Login}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className={styles.logo} />
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.formcontent}>
          <h2>Iniciar Sesión</h2>
          <form>
            <input
              type="text"
              placeholder="Usuario"
              required
              className={styles.inputField}
            />
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className={styles.inputField}
            />
            <br />
            <br />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <p>
            <button
              type="button"
              onClick={handleResetPasswordClick}
              className={styles.linkButton}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </p>
          <p>
            <button
              type="button"
              onClick={handleUserRecoveryClick}
              className={styles.linkButton}
            >
              ¿Olvidaste tu usuario?
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
