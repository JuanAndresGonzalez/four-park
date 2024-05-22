import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddParking.module.css';
import logo from './assets/img/logo.png';

const AgregarParqueadero = () => {
    const navigate = useNavigate();
}

function agregarParqueadero() {
  const [form, setForm] = useState({
    ciudad: '',
    direccion: '',
    capacidad: '',
    horario: '',
    telefono: '',
    email: '',
    codigo: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={styles.AddParking}>
    <div className={styles.logocontainer}>
      <img src={logo} alt='Four Parking Logo' className={styles.logo} />
    </div>
        <h1>Agregar nuevo parqueadero</h1>
    <div className={styles.formcontainer}>
    <div className={styles.formcontent}>
    <form onSubmit={handleSubmit}>
      <label>
        Id del parqueadero
        <input type="number" name="idparqueadero" onChange={handleChange}/>
      </label><br></br>
      <label>
        Id de la ciudad  
        <input type="number" name="idciudad" onChange={handleChange} />
      </label><br></br>
      <label>
        Id de la disponibilidad 
        <input type="number" name="iddisponibilidad" onChange={handleChange} />
      </label><br></br>
      <label>
        Id del tipo
        <input type="number" name="idtipo" onChange={handleChange} />
      </label><br></br>
      <label>
        Nombre del parqueadero  
        <input type="text" name="nombreparqueadero" onChange={handleChange} />
      </label><br></br>
      <label>
        Cantidad de espacios
        <input type="number" name="cantidadespacios" onChange={handleChange} />
      </label><br></br>
      <label>
        Precio por minuto (MOTO)
        <input type="text" name="preciomoto" onChange={handleChange} />
      </label><br></br>
      <label>
        Precio por minuto (CARRO)
        <input type="text" name="preciocarro" onChange={handleChange} />
      </label><br></br>
      <label>
        Tarifa (MOTO)
        <input type="text" name="tarifamoto" onChange={handleChange} />
      </label><br></br>
      <label>
        Tarifa (CARRO)
        <input type="text" name="tarifacarro" onChange={handleChange} />
      </label><br></br>
      <button type="submit">GUARDAR</button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default agregarParqueadero;