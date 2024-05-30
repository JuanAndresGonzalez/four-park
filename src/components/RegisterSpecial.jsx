import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import styles from "../styles/RegisterSpecial.module.css";
import { client } from "../services/apirest";

const RegisterSpecial = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      correo_electronico: correo,
      nombre: nombre,
      apellido: apellido,
      id_rol: "1    ",
    };

    try {
      const response = await client.post("/api/usuarios", user);

      if (response.status === 201) {
        console.log("Usuario registrado:", response.data);
        navigate("/inise");
      } else {
        console.error("Error:", response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error de registro:", error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className={styles.registration}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Four Parking logo" className="logo" />
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.formcontent}>
          <h2>Regístrate/Funcionario</h2>
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
        </div>
      </div>
    </div>
  );
};

export default RegisterSpecial;
