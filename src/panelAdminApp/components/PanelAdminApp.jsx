import { Link } from "react-router-dom"

export const PanelAdminApp = () => {
  return (
    <>
    <h1>PanelAdminApp</h1>
        <div className="container">
          <div className="row mt-4">
            <div className=" col-4 text-center">
              <p> CRUD Hoteles.	Puede ver los eventos de un hotel en específico</p>
              <Link  to="/hoteles" className="boton boton-verde">CRUD Hoteles</Link>
            </div>
            <div className="col-4 text-center">
              <p> Ver Perfil, editarlo y eliminarlo</p>
              <Link to="/perfil" className="boton boton-verde">Perfil Usuario</Link>
            </div>
            <div className=" col-4 text-center">
              <p> CRUD Roles</p>
              <Link to="/roles" className="boton boton-verde">CRUD Roles</Link>   
            </div>
          </div>

          <div className="row mt-4">
          <div className=" col-4 text-center">
            <p> CRUD Departamentos</p>
            <Link to="/departamentos" className="boton boton-verde">CRUD Departamentos</Link>
            </div>
            <div className="col-4 text-center">
              <p>Listar Usuarios</p>
              <Link to="/usuarios" className="boton boton-verde">Listar Usuarios</Link>
            </div>
            <div className=" col-4 text-center">
              <p>CRUD Tipo de Evento</p>
              <Link to="/tipoevento" className="boton boton-verde">CRUD Tipo Evento</Link>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4 text-center"></div>
              <p>Mostrar factura del user logeado</p>
              <Link to="/factura" className="boton boton-verde">Factura</Link>
          </div>
        </div>
 </>   
  )
}
