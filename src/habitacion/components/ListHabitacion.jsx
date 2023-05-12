import { useEffect, useState } from "react";
import { apiHabitacion } from "../api/apiHabitacion";
import { Link } from "react-router-dom";
import { UpdateHabitacion } from "./UpdateHabitacion";
import { Habitacion } from "../models/habitacion.models";
import { apiHabitacionDelete } from "../api/apiHabitacion"; 

export const ListHabitacion = () => {
  
  const [habitacion, setHabitacion] = useState(Habitacion);
  
  const [showModal, setShowModal] = useState(false);
  const [ids, setId] = useState(0)
  
  //Estado de usuarios en la lista de forma independiente
  const [listHabit, setListHabit] = useState([]);

  const viewHabitList = async () => {
    const getListHabitFromAPI = await apiHabitacion();
    
    setListHabit(getListHabitFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewHabitList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    console.log(h)
    setShowModal(true);
    setHabitacion(h);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    const eliminarHabitacion = async(id) => {
    let result = await apiHabitacionDelete(id);
    if (result) {
      setListHabit(listHabit.filter((h) => h._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Habitacion Eliminado',
        text: 'Se ha eliminado correctamente',
        showConfirmButton: true,
        confirmButtonText: "Ok"
    })
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
        <Link to="/create-habitacion" className="boton boton-verde">
          Nueva habitacion
        </Link>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Descripción</th>
              <th className="text-center">Img</th>
              <th className="text-center">Capacidad</th>
              <th className="text-center">Hotel</th>
              <th className="text-center">Administrador</th>
              <th className="text-center">Disponible</th>
              <th className="text-center">Opciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listHabit.map((h) => {
              
              return (
                
                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.precio}</td>
                  <td className="text-center">{h.descripcion}</td>
                  <td className="text-center">{h.img}</td>
                  <td className="text-center">{h.capacidad}</td>
                  <td className="text-center">{h.hotel}</td>
                  <td className="text-center">{h.usuario}</td>
                  <td className="text-center">{h.disponible}</td>
                  
                  <td>
                  <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                    Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100" 
                      onClick={() =>eliminarHabitacion(h._id)}>
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
        <UpdateHabitacion
          habitacionEdit={habitacion}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHabitacion>
      </main>
    </>
  );
};
