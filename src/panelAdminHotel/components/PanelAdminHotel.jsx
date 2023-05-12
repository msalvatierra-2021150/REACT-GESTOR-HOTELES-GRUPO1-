import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <div>PanelAdminHotel</div>
      <p>Ejecuta tal consulta o irse a crud tal</p>
      <Link to="/list-evento" className="boton boton-verde">CRUD Evento</Link>
      <Link to="/factura" className="boton boton-verde">Factura</Link>
    </>
  )
}
