import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <div>PanelAdminHotel</div>
      <p>Ejecuta tal consulta o irse a crud tal</p>
      
      <Link className="boton boton-verde mx-2" to="/lista-hoteles">Lista de hoteles</Link>

      <Link className="boton boton-verde mx-2" to="/lista-hoteles-admin">Lista de hoteles que administro</Link>

    </>
  )
}
