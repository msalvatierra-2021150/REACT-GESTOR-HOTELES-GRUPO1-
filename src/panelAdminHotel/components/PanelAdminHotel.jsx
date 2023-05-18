import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <h1>PanelAdminHotel</h1>
    
      <div className="container">
          <div className="row mt-4">
            <div className=" col-4 text-center">
              <p> Ver Perfil, editarlo y eliminarlo</p>
              <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
            </div>
            <div className="col-4 text-center">
              <p>CRUD Habitacion</p>
              <Link to="/habitaciones" className="boton boton-verde"> CRUD HABITACION</Link>
            </div>
            <div className=" col-4 text-center">
              <p>CRUD Servicios</p>
              <Link to="/servicios" className="boton boton-verde">CRUD Servicios</Link>  
            </div>
          </div>

          <div className="row mt-4">
          <div className=" col-4 text-center">
              <p>CRUD EVENTOS</p>
              <Link to="/list-evento" className="boton boton-verde">CRUD Evento</Link>
            </div>
            <div className="col-4 text-center">
              <p>Mostrar factura del user logeado</p>
              <Link to="/factura" className="boton boton-verde">Factura</Link>
            </div>
            <div className=" col-4 text-center">
              <p>Funcionalidades de los hoteles del Admin Logeado</p>
              <Link className="boton boton-verde mx-2" to="/lista-hoteles-admin">Lista de hoteles que administro</Link>
            </div>
          </div>

        </div>
    
    </>
  )
}
