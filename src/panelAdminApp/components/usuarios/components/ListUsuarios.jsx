import { useEffect, useState } from "react";
import { apiUsuariosAll } from "../api/apiUsuarios";
import { Link } from "react-router-dom";

export const ListUsuarios = () => {
  //Estado de usuarios en la lista de forma independiente
  const [getListUsuarios, setListUsuarios] = useState([]);

  const viewUsuariosList = async () => {
    const getListUsuariosFromAPI = await apiUsuariosAll();
    setListUsuarios(getListUsuariosFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => { viewUsuariosList(); }, []);

  return (
    <>
      <main className="container seccion">
      <Link className="boton boton-verde" to={"/panel-adminapp"}>Regresar</Link>
        <h1>Administrador de Hoteles</h1>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Correo</th>
              <th className="text-center">Rol</th>
            </tr>
          </thead>
          <tbody>
            {getListUsuarios.map((u) => {
              return (
                <tr key={u._id}>
                  <th className="text-center">{u._id} </th>
                  <td className="text-center">{u.nombre}</td>
                  <td className="text-center">{u.correo}</td>
                  <td className="text-center">{u.rol}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </main>
    </>
  );
};
