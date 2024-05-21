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
        Ciudad: 
        <input type="text" name="ciudad" onChange={handleChange}/>
      </label><br></br>
      <label>
        Dirección:  
        <input type="text" name="direccion" onChange={handleChange} />
      </label><br></br>
      <label>
        Capacidad:  
        <input type="text" name="capacidad" onChange={handleChange} />
      </label><br></br>
      <label>
        Horario:    
        <input type="text" name="horario" onChange={handleChange} />
      </label><br></br>
      <label>
        Teléfono:   
        <input type="text" name="telefono" onChange={handleChange} />
      </label><br></br>
      <label>
        E-mail: 
        <input type="text" name="email" onChange={handleChange} />
      </label><br></br>
      <label>
        Código: 
        <input type="text" name="codigo" onChange={handleChange} />
      </label><br></br>
      <button type="submit">GUARDAR</button>
      <p><a href="/reserva">vista reserva</a></p>
    </form>
    </div>
    </div>
    </div>
  );
}

export default agregarParqueadero;