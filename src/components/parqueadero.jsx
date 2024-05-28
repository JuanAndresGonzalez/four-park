import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/Parqueadero.module.css";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa"; // Import the delete icon

const Parqueadero = () => {
  const navigate = useNavigate();
  const [parqueaderos, setParqueaderos] = useState([
    {
      nombre: "Parqueadero A",
      ciudad: "Bogotá",
      direccion: "Calle 123 #45-67",
      cantidadEspacios: 50,
      tipo: "Cubierto",
      horaApertura: "6:00 AM",
      horaCierre: "10:00 PM",
      tarifaMotoPorMinuto: 50,
      tarifaCarroPorMinuto: 100,
      tarifaPlenaMoto: 5000,
      tarifaPlenaCarro: 10000,
      coordenadas: [4.711, -74.0721],
    },
    {
      nombre: "Parqueadero B",
      ciudad: "Bogotá",
      direccion: "Calle 120 #45-67",
      cantidadEspacios: 50,
      tipo: "Cubierto",
      horaApertura: "6:00 AM",
      horaCierre: "10:00 PM",
      tarifaMotoPorMinuto: 50,
      tarifaCarroPorMinuto: 100,
      tarifaPlenaMoto: 5000,
      tarifaPlenaCarro: 10000,
      coordenadas: [2.711, -70.0721],
    },
  ]);

  const handleReservationClick = () => {
    navigate("/reserva");
  };

  const handleGerenteClick = () => {
    navigate("/gerente");
  };

  const handleDelete = (index) => {
    const newParqueaderos = parqueaderos.filter((_, i) => i !== index);
    setParqueaderos(newParqueaderos);
  };

  return (
    <div className={styles.parqueadero}>
      <nav>
        <div className={styles.logocontainer}>
          <img src={logo} alt="Four Parking logo" className={styles.logo} />
        </div>
        <div className={styles.navLinks}>
          <a href="/">Inicio</a>
          <a href="/parqueadero">Parqueaderos</a>
          <a href="/somos">¿Quiénes somos?</a>
          <button onClick={handleGerenteClick} className={styles.Gerentebutton}>
            Acceso Gerente
          </button>
          <button
            onClick={handleReservationClick}
            className={styles.Reservationbutton}
          >
            ¡Reserva ahora!
          </button>
        </div>
      </nav>
      <div className={styles.BannerContainer}>
        <div className={styles.BannerText}>
          <h1 className={styles.MainBannerText}>Información de Parqueaderos</h1>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Nombre del Parqueadero</th>
                  <th>Ciudad</th>
                  <th>Dirección</th>
                  <th>Cantidad de Espacios</th>
                  <th>Tipo</th>
                  <th>Hora Apertura</th>
                  <th>Hora Cierre</th>
                  <th>Tarifa Moto por Minuto</th>
                  <th>Tarifa Carro por Minuto</th>
                  <th>Tarifa Plena Moto</th>
                  <th>Tarifa Plena Carro</th>
                  <th></th> {/* Added column for actions */}
                </tr>
              </thead>
              <tbody>
                {parqueaderos.length > 0 ? (
                  parqueaderos.map((parqueadero, index) => (
                    <tr key={index}>
                      <td>{parqueadero.nombre}</td>
                      <td>{parqueadero.ciudad}</td>
                      <td>{parqueadero.direccion}</td>
                      <td>{parqueadero.cantidadEspacios}</td>
                      <td>{parqueadero.tipo}</td>
                      <td>{parqueadero.horaApertura}</td>
                      <td>{parqueadero.horaCierre}</td>
                      <td>{parqueadero.tarifaMotoPorMinuto}</td>
                      <td>{parqueadero.tarifaCarroPorMinuto}</td>
                      <td>{parqueadero.tarifaPlenaMoto}</td>
                      <td>{parqueadero.tarifaPlenaCarro}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(index)}
                          className={styles.deleteButton}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>{" "}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12">
                      No hay datos de parqueaderos disponibles.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <MapContainer
          center={[4.711, -74.0721]}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {parqueaderos.map((parqueadero, index) => (
            <Marker key={index} position={parqueadero.coordenadas}>
              <Popup>
                <b>{parqueadero.nombre}</b>
                <br />
                {parqueadero.direccion}
                <br />
                {parqueadero.ciudad}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Parqueadero;
