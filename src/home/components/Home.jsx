import React from 'react'
import { Link } from "react-router-dom"
import { SearchHotel } from '../hoteles/components/SearchHotel'


export const Home = () => {
  return (
    <>
      <div>Home</div>
      <p> Ver Perfil, editarlo y eliminarlo</p>
      <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
      <p>Buscador de hotel</p>
      <SearchHotel />
      <Link to="/see-habitaciones" className="boton boton-verde">Habitaciones</Link>
      <p>Muestra las facturas del cliente</p>
      <Link to="/factura" className="boton boton-verde">Factura</Link>
      <p>Listar Servicios Cliente</p>
      <Link to="/carrito-servicios" className="boton boton-verde">Servicios</Link>
      
    </>
  )
}
