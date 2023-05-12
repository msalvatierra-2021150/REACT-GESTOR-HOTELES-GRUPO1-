import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
        <div>Home</div>
          <p>Ejecuta tal consulta o irse a crud tal</p>
          <Link to="/create-factura" className="boton boton-verde"> CRUD FACTURA</Link>
    </>
  )
}
