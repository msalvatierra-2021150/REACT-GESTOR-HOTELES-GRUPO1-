import React from 'react'
import { Link } from "react-router-dom"
import { SearchHotel } from '../hoteles/components/SearchHotel'
import explorador from "../../img/explorador.jpg";

export const Home = () => {
  return (
    <>
      <h1>Bienvenido @Hotelero!</h1>

      <div className="container">
          <div className="row mt-4">
            <div className=" col-4 text-center">
              <p> Ver Perfil, editarlo y eliminarlo</p>
              <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
            </div>
            <div className="col-4 text-center">
              
            </div>
            <div className=" col-4 text-center">
            <Link to="/see-habitaciones" className="boton boton-verde">Habitaciones</Link>
            </div>
          </div>

          <div className="row mt-4">
          <div className=" col-4 text-center">
            <p>Muestra las facturas del cliente</p>
            <Link to="/factura" className="boton boton-verde">Factura</Link>
            </div>
            <div className="col-4 text-center">
              <p>Listar Servicios Cliente</p>
              <Link to="/carrito-servicios" className="boton boton-verde">Servicios</Link>
            </div>
            <div className=" col-4 text-center">
              <p>Funcionalidades de listar hoteles para Cliente</p>
              <Link className="boton boton-verde" to='/hoteles-lista'>Lista Hoteles</Link>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4 text-center"></div>
              <p>Mostrar factura del user logeado</p>
              <Link to="/factura" className="boton boton-verde">Factura</Link>
          </div>
        </div>
    </>
  )
}
