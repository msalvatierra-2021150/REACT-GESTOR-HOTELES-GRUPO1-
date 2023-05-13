import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <div>PanelAdminHotel</div>
      
      <p> Ver Perfil, editarlo y eliminarlo</p>
      <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>

      <p>CRUD Habitacion</p>
      <Link to="/habitaciones" className="boton boton-verde"> CRUD HABITACION</Link>

      <p>CRUD Servicios</p>
      <Link to="/servicios" className="boton boton-verde">CRUD Servicios</Link>

      <p>CRUD EVENTOS</p>
      <Link to="/list-evento" className="boton boton-verde">CRUD Evento</Link>

      <p>Mostrar factura del user logeado</p>
      <Link to="/factura" className="boton boton-verde">Factura</Link>

      <p>Funcionalidades de los hoteles del Admin Logeado</p>
      <Link className="boton boton-verde mx-2" to="/lista-hoteles-admin">Lista de hoteles que administro</Link>
    </>
  )
}
