import { useEffect, useState } from "react";
import { apiUsuario } from "../api/apiUsuario";
import { Link } from "react-router-dom";
import { UpdateUsuario } from "./UpdateUsuario";
import { Usuario } from "../models/usuario.models";
import { apiUsuarioDelete } from "../api/apiUsuario"; 

export const ListUsuario = () => {
  
  const [usuario, setUsuario] = useState(Usuario);
  
  const [showModal, setShowModal] = useState(false);
  
  //Estado de usuarios en la lista de forma independiente
  const [usuarioInfo, setUsuarioInfo] = useState([]);

  const viewUsuarioList = async () => {
    const getUsuarioFromAPI = await apiUsuario();
    setUsuarioInfo(getUsuarioFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewUsuarioList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    console.log(h)
    setShowModal(true);
    setUsuario(h);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const eliminarUsuario = async(id) => {
    let result = await apiUsuarioDelete(id);
    if (result) {
      setUsuarioInfo(usuarioInfo.filter((h) => h._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Usuario Eliminado',
        text: 'Se ha eliminado correctamente',
        showConfirmButton: true,
        confirmButtonText: "Ok"
    }).then((result) => {
      if (result.isConfirmed) {
          localStorage.removeItem("token");
          window.location.href = '/login';
      }
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
        <h1>Perfil</h1>
        {/*
               <Link to="/create-hotel" className="boton boton-verde">
          Nuevo Usuario
        </Link> 
        */}

        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Correo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarioInfo.map((u) => {
              
              return (
                
                <tr key={u._id}>
                  <th className="text-center">{u._id} </th>
                  <td className="text-center">{u.nombre}</td>
                  <td className="text-center">{u.correo}</td>
              <td>
                  <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(u)}>
                    Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100" 
                      onClick={() =>eliminarUsuario(u._id)}>
                    Eliminar
                    </button>
                  </td>
                </tr>
                  
              );             
            }  
            ) 
            }
          </tbody>
        </table>
        <UpdateUsuario
          usuarioEdit={usuario}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateUsuario>
      </main>
    </>
  );
};
