import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import logo from "../assets/img/logo.png";
import styles from "../styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();

  const handleResetPasswordClick = () => {
    navigate("/reinicioPassword");
  };

  const handleUserRecoveryClick = () => {
    navigate("/recuperarUsuario");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          correo_electronico:username,
          contrasena: password,
          recaptchaToken: recaptchaValue
        });
        alert(response.data.message);
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Please complete the reCAPTCHA.");
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className={styles.logo} />
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.formcontent}>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuario"
              required
              className={styles.inputField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lf5Ku0pAAAAALHlpZlmAcmbnyp0W0YGschV9w9k" // Reemplaza esto con tu clave de sitio de reCAPTCHA
            />
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
