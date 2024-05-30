import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Registration.module.css";
import { client } from "../services/apirest";

const Registration = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      correo_electronico: correo,
      nombre: nombre,
      apellido: apellido,
      contrasena: contrasena,
      id_rol: "2    ",
    };
    localStorage.setItem("regdata", JSON.stringify(user));
    navigate("/credito");
  };

  return (
    <div className={styles.registration}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className="logo" />
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.formcontent}>
          <h2>Regístrate</h2>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="input-field"
            />
            <br />
            <input
              type="text"
              placeholder="Nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="input-field"
            />
            <br />
            <input
              type="text"
              placeholder="Apellido"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="input-field"
            />
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="input-field"
            />
            <br />
            <button
              type="submit"
              className={styles.registerFbutton}
              onClick={handleRegister}
            >
              Regístrate
            </button>
          </form>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/inise")}
              className={styles.routbuttonER}
            >
              Inicia sesión
            </button>
          </p>
          <p>
            Si eres funcionario{" "}
            <button
              onClick={() => navigate("/registrofuncionario")}
              className={styles.routbuttonER}
            >
              Click aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
