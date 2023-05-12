import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminApp = () => {
  return (
    <>
    <div>PanelAdminApp</div>
      <p> CRUD Hoteles y consulta 5.	Puede ver los eventos de un hotel en específico</p>
      <Link to="/hoteles" className="boton boton-verde">CRUD Hoteles</Link>
      <p> Ver Perfil, editarlo y eliminarlo</p>
      <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>

      <p> CRUD Roles y consulta 5.	Puede ver los eventos de un hotel en específico</p>
      <Link to="/roles" className="boton boton-verde">CRUD Roles</Link>

      <p> CRUD Departamentos</p>
      <Link to="/departamentos" className="boton boton-verde">CRUD Departamentos</Link>

      <p>Listar Usuarios</p>
      <Link to="/usuarios" className="boton boton-verde">Listar Usuarios</Link>
 </>   
  )
}
