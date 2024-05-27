import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './registration';
import Inise from './inise';
import AgregarParqueadero from './agregarParqueadero';
import Reserva from './reserva';
import './Registration.css';
import PasswordReset from './reiniciarPassword';
import UserRecovery from './recuperarUsuario';
import Factura from './factura';
import Home from './homepage';
import Parqueadero from './parqueadero';
import Somos from './somos';
import EmploRegister from './emploRegister';
import Gerente from './gerente';
import ModificarParqueadero from './modificarParqueadero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/inise" element={<Inise />} />
      <Route path="/agregarParqueadero" element={<AgregarParqueadero />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path='/reinicioPassword' element={<PasswordReset />} />
      <Route path='/recuperarUsuario' element={<UserRecovery/>} />
      <Route path='/factura' element={<Factura/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/parqueadero' element={<Parqueadero/>}/>
      <Route path='/somos' element={<Somos/>}/>
      <Route path='/emploRegister' element={<EmploRegister/>}/>
      <Route path='/gerente' element={<Gerente/>}/>
      <Route path='/modificarParqueadero' element={<ModificarParqueadero/>}/>
    </Routes> 
  </Router>
);
