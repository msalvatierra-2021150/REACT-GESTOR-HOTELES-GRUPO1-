import { useEffect, useState } from "react";
import { apiHotel } from "../api/apiHotel";
import { Link } from "react-router-dom";
import { UpdateHotel } from "./UpdateHotel";
import { Hotel } from "../models/hotel.models";
import { apiHotelDelete } from "../api/apiHotel";
import { ModalEvent } from "./ModalEvent";
import Swal from 'sweetalert2';

export const ListHotel = () => {
  const [hotel, setHotel] = useState(Hotel);

  const [showModal, setShowModal] = useState(false);
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [option, setOption] = useState(0);
  const [ids, setId] = useState(0);

  //Estado de usuarios en la lista de forma independiente
  const [listHotels, setListHotels] = useState([]);

  const viewHotelList = async () => {
    const getListHotelsFromAPI = await apiHotel();

    setListHotels(getListHotelsFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewHotelList();
  }, [showModal, showModalEvent]);

  //modal editar
  const handleOpenModal = (h) => {
    console.log(h);
    setShowModal(true);
    setHotel(h);
  };

  //modal eventos
  const handleOpenModalEvent = (id, numberOption) => {
    setShowModalEvent(true);
    setId(id);
    setOption(numberOption);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseModalEvent = () => setShowModalEvent(false);

  const eliminarHotel = async (id) => {
    let result = await apiHotelDelete(id);
    if (result) {
      setListHotels(listHotels.filter((h) => h._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Hotel Eliminado',
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
  const enviar = (h)=>{

    setHotel(h);
   
  }
  return (
    <>
      <main className="container seccion">
        <h1>Administrador de Hoteles</h1>
        <p>Graficas del los hoteles con mas reservaciones</p>
      <Link to="/graficas" className="boton boton-verde">Graficas</Link>
        <Link to="/create-hotel" className="boton boton-verde">
          Nuevo Hotel
        </Link>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Direccion</th>
              <th className="text-center">Departamento</th>
              <th className="text-center">NIT</th>
              <th className="text-center">Rating</th>
              <th className="text-center">#Reservaciones</th>
              <th className="text-center">IMG</th>
              <th className="text-center">Descripcion</th>
              <th className="text-center">Administrador</th>
              <th className="text-center">Eventos</th>
              <th className="text-center">Opciones</th>
              <th className="text-center">Graficas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listHotels.map((h) => {

              return (
                <tr key={h._id}>

                  <td className="text-center">{h.nombre}</td>
                  <td className="text-center">{h.direccion}</td>
                  <td className="text-center">{h.departamento.nombre}</td>
                  <td className="text-center">{h.nit}</td>
                  <td className="text-center">{h.rating}</td>
                  <td className="text-center">{h.numero_reservaciones}</td>
                  <td className="text-center">{h.img}</td>
                  <td className="text-center">{h.descripcion}</td>
                  <td className="text-center">{h.usuario.nombre}</td>
                  <td className="text-center">
                    <button className="btn btn-success ms-2 w-100"
                      onClick={() => handleOpenModalEvent(h._id, 1)}>
                      Agregar eventos
                    </button>
                    <button className="btn btn-primary ms-2 w-100"
                      onClick={() => handleOpenModalEvent(h._id, 2)}>
                      Ver eventos
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                      Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100"
                      onClick={() => eliminarHotel(h._id)}>
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <Link to={`/grafica-habitaciones?idHotel=${h._id}`} className="btn btn-success ms-2 w-100" onClick={()=>setHotel(h)}>
                        Grafica
                    </Link>
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
        <ModalEvent
          id={ids}
          isOpen={showModalEvent}
          onClose={() => handleCloseModalEvent()}
          titleButton={"Cerrar"}
          option={option}
        ></ModalEvent>
      </main>
    </>
  );
};