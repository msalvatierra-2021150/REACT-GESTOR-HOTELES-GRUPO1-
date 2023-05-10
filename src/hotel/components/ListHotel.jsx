import { useEffect, useState } from "react";
import { apiHotel } from "../api/apiHotel";
import { Link } from "react-router-dom";
import { UpdateHotel } from "./UpdateHotel";
import { Hotel } from "../models/hotel.models";
import { apiHotelDelete } from "../api/apiHotel"; 

export const ListHotel = () => {
  
  const [hotel, setHotel] = useState(Hotel);
  
  const [showModal, setShowModal] = useState(false);
  const [ids, setId] = useState(0)
  
  //Estado de usuarios en la lista de forma independiente
  const [listHotels, setListHotels] = useState([]);

  const viewHotelList = async () => {
    const getListHotelsFromAPI = await apiHotel();
    
    setListHotels(getListHotelsFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewHotelList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    
    setShowModal(true);
    setHotel(h);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    const eliminarHotel = async(id) => {
    let result = await apiHotelDelete(id);
    if (result) {
      setListHotels(listHotels.filter((h) => h._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Rol Eliminado',
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
        <h1>Administrador de Rol</h1>
        <Link to="/create-hotel" className="boton boton-verde">
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
            {listHotels.map((h) => {
              
              return (
                
                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.nombre}</td>
                
                  
                  <td>
                  
                  <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                    Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100" 
                      onClick={() =>eliminarHotel(h._id)}>
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
        <UpdateHotel
          hotelEdit={hotel}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHotel>
      </main>
    </>
  );
};
