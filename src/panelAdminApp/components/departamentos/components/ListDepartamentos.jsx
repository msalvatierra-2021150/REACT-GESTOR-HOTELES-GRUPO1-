import { useEffect, useState } from "react";
import { apiDepartamentos, apiDepartamentosDelete } from "../api/apiDepartamentos";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { UpdateDepartamentos } from "./UpdateDepartamentos";
import { departamento } from "../models/Departamentos.models";


export const ListDepartamentos = () => {
  const [showModal, setShowModal] = useState(false);

  //Estado de usuarios en la lista de forma independiente
  const [getListDepartamentos, setListDepartamentos] = useState([]);
  const [departamentos, setDepartamentos] = useState(departamento)

  const viewDepartamentosList = async () => {
    const getListDepartamentosFromAPI = await apiDepartamentos();
    setListDepartamentos(getListDepartamentosFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => { viewDepartamentosList(); }, [showModal]);

  useEffect(() => { viewDepartamentosList(); }, []);

  //modal
  const handleOpenModal = (h) => {
    setShowModal(true);
    setDepartamentos(h);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminarDepartamentos = async (id) => {
    const eliminarDepartamentos = await apiDepartamentosDelete(id);
    if (eliminarDepartamentos) {
      setListDepartamentos(getListDepartamentos.filter((d) => d._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Hotel Eliminado',
        text: 'Se ha eliminado correctamente',
        showConfirmButton: true,
        confirmButtonText: "Ok"
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'No se ha podido eliminar',
        showConfirmButton: true,
        confirmButtonText: "Ok"
      })
    }
  }

  return (
    <>
      <main className="container seccion">
        <h1>Administrador de Hoteles</h1>
        <Link className="boton boton-verde" to={"/panel-adminapp"}>Regresar</Link>
        <Link to="/create-departamento" className="boton boton-verde">
          Nuevo Departamento
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
            {getListDepartamentos.map((h) => {

              return (

                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.nombre}</td>

                  <td>
                    <button className="btn btn-success ms-2 w-100"
                      onClick={() => eliminarDepartamentos(h._id)}>
                      Eliminar
                    </button>
                    <button className="btn btn-primary ms-2 w-100" onClick={() => handleOpenModal(h)}>Editar</button>
                  </td>
                </tr>

              );

            }

            )

            }
          </tbody>
        </table>
        <UpdateDepartamentos
          departamentoEdit={departamentos}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateDepartamentos>

      </main>
    </>
  );
};
