import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
        <div>Panel Cliente</div>
      <p>Ejecuta tal consulta o irse a crud talSS</p>
      <Link to="/factura" className="boton boton-verde">Factura</Link>
      <Link to="/carrito-servicios" className="boton boton-verde">Servicios</Link>
          
    </>
  )
}
