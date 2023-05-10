import React from 'react'
import { Link } from "react-router-dom"
import { SearchHotel } from '../hoteles/components/SearchHotel'


export const Home = () => {
  return (
    <>
      <div>Home</div>
      <p> Ver Perfil, editarlo y eliminarlo</p>
      <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
      <p>Ejecuta tal consulta o irse a crud tal</p>
      <SearchHotel />
      <Link className="boton boton-verde" to={"/habitaciones"}>Habitaciones</Link>
    </>
  )
}
