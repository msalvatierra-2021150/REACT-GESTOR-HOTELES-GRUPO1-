import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
        <div>Home</div>
          <p>Ejecuta tal consulta o irse a crud tal</p>
          <Link className="boton boton-verde" to='/hoteles-lista'>Lista Hoteles</Link>
    </>
  )
}
