import { useEffect, useState } from "react";
import { apiRol } from "../api/apiRol";
import { Link } from "react-router-dom";
import { UpdateRol } from "./UpdateRol";
import { Rol } from "../models/rol.models";
import { apiRolDelete } from "../api/apiRol";
import Swal from "sweetalert2";

export const ListRol = () => {
  const [rol, setRol] = useState(Rol);
  const [showModal, setShowModal] = useState(false);

  //Estado de usuarios en la lista de forma independiente
  const [listRoles, setListRoles] = useState([]);

  const viewHotelList = async () => {
    const getListRolesFromAPI = await apiRol();
    setListRoles(getListRolesFromAPI);
  };
  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewHotelList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    setShowModal(true);
    setRol(h);
    
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminarRol = async (id) => {
    let result = await apiRolDelete(id);
    if (result) {
      setListRoles(listRoles.filter((h) => h._id !== id));
      Swal.fire({
        icon: "success",
        title: "Rol Eliminado",
        text: "Se ha eliminado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Error",
        text: "No se ha podido eliminar",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <>
      <main className="container seccion">
        <h1>Administrador de Rol</h1>
        <Link className="boton boton-verde" to={"/panel-adminapp"}>Regresar</Link>
        <Link to="/create-rol" className="boton boton-verde">
          Nuevo Rol
        </Link>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listRoles?.map((h) => {
              return (
                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.rol}</td>

                  <td>
                    <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger ms-2 w-100"
                      onClick={() => eliminarRol(h._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateRol
          rolEdit={rol}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateRol>
      </main>
    </>
  );
};