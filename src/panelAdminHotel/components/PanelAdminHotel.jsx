import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <div>PanelAdminHotel</div>
      <p>CRUD</p>
      <Link to="/habitaciones" className="boton boton-verde"> CRUD HABITACION</Link>
    </>
  )
}
