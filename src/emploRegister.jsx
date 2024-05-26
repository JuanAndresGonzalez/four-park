import React, { useState } from "react";

const EmploRegister = () => {
  const [input, setInput] = useState({
    email: "",
    nombre: "",
    apellido: "",
    contraseña: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <h2>Registro de Empleados</h2>
        <form>
            <input type="email" placeholder="Correo Electrónico" required className='input-field' /><br />
            <input type="text" placeholder="Nombre" required className='input-field'/><br />
            <input type="text" placeholder="Apellido" required className='input-field' /><br />
            <input type="password" placeholder="Contraseña" required /><br className='input-field' /><br />
            <button type="submit" className='registerF-button'>Registrar</button>
        </form>
    </div>
  );
};

export default EmploRegister;
