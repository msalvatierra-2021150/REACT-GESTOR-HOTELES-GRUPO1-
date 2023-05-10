import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
        <div>Home</div>
          <p>Ejecuta tal consulta o irse a crud tal</p>
          <Link className="boton boton-verde"> A la pagina de tu funcionalidad</Link>
          <p> Ver Perfil, editarlo y eliminarlo</p>
          <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
    </>
  )
}
