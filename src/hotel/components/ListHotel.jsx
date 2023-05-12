import { useEffect, useState } from "react";
import { apiAdminHoteles, apiHabitacionesActivas, apiHotel } from "../api/apiHotel";
import { Link } from "react-router-dom";
import { UpdateHotel } from "./UpdateHotel";
import { Hotel } from "../models/hotel.models";
import { apiHotelDelete } from "../api/apiHotel";
import { SearchUser } from "./SearchUser";

export const ListHotel = () => {

  const [hotel, setHotel] = useState(Hotel);
  const [busqueda, setBusqueda] = useState('');

  const [showResultado, setShowResultado] = useState(false);

  const [showModal, setShowModal] = useState(false);

  //Estado de usuarios en la lista de forma independiente
  const [listHotels, setListHotels] = useState([]);

  const button = document.getElementById("botonBusqueda");

  const viewHotelList = async () => {
    const listaHoteles = await apiAdminHoteles();
    setListHotels(listaHoteles);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewHotelList();

  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    console.log(h)
    setShowModal(true);
    setHotel(h);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  }

  const mostrarResultado = () => {
    setShowResultado(!showResultado);
    if (busqueda.trim() == "") {
      setShowResultado(false);
    }
    if (button.value == "Cancelar") {
      setBusqueda("");
    }
  }

  const searchStyle = {
    width: "100 %",
    position: "relative",
    display: "flex"
  }

  const searchTermStyle = {
    width: "100 %",
    border: "3px solid #71b100",
    padding: "5px",
    margin: "8px",
    outline: "none",
    color: "#000",
    fontWeight: "700"
  }

  const searchButtonStyle = {
    border: "1px solid #71b100",
    background: "#71b100",
    textAlign: "center",
    color: "#fff",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold"
  }

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

  return (
    <>
      <main className="container seccion ">

        <div className="container" style={searchStyle}>
          <input type="text"
            placeholder="Buscar usuario... " style={searchTermStyle}
            value={busqueda} onChange={handleBusqueda}
            disabled={showResultado}
          />
          <button type="submit"
            id="botonBusqueda"
            style={searchButtonStyle}
            onClick={mostrarResultado}
            value={showResultado ? "Cancelar" : "Buscar"}
          >
            {showResultado ? "Cancelar" : "Buscar"}
          </button>
        </div>

        <h1>Administrador de Hoteles</h1>

        <div className="table-responsive">
          {showResultado ? (<SearchUser term={busqueda} />) : (
            <>

              <Link to="/create-hotel" className="boton boton-verde">
                Nuevo Hotel
              </Link>

              <table className="propiedades table">
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Hotel</th>
                    <th className="text-center">Dirección</th>
                    <th className="text-center">Dpto.</th>
                    <th className="text-center">NIT</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">Reservaciones</th>
                    <th className="text-center">Habitaciones</th>
                    <th className="text-center">IMG</th>
                    <th className="text-center">Descripcion</th>
                    <th className="text-center">Administrador</th>
                    <th className="text-center">Opciones</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listHotels.map((h) => {
                    return (
                      <tr key={h._id} >
                        <th className="text-center" id="idHotel" >
                          <div className="mb-3">
                            <textarea className="form-control" rows="5"
                              disabled={true} defaultValue={h._id}></textarea>
                          </div>
                        </th>
                        <td className="text-center">{h.nombre}</td>
                        <td className="text-center">{h.direccion}</td>
                        <td className="text-center">{h.departamento.nombre}</td>
                        <td className="text-center">{h.nit}</td>
                        <td className="text-center">{h.rating}</td>
                        <td className="text-center">

                          <Link to="/lista-reservas"
                            className="boton boton-verde p-2 m-0"
                            state={h._id}
                          >
                            Ver reservaciones
                          </Link>

                        </td>
                        <td className="text-center">

                          <Link to="/lista-habitaciones"
                            className="boton boton-verde p-2 m-0"
                            state={h._id}
                          >
                            Ver habitaciones
                          </Link>

                        </td>
                        <td className="text-center">
                          <img src={h.img} alt={h.nombre} className="img-fluid" />
                        </td>
                        <td className="text-center">
                          <div className="mb-3">
                            <textarea className="form-control" rows="4"
                              disabled={true} defaultValue={h.descripcion}></textarea>
                          </div>
                        </td>
                        <td className="text-center">{h.usuario.nombre}</td>

                        <td>
                          <button className="btn btn-success ms-2 w-100"
                            onClick={() => eliminarHotel(h._id)}>
                            Agregar eventos
                          </button>
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
                          <button className="btn btn-primary ms-2 w-100">Ver eventos</button>
                        </td>
                      </tr>

                    );
                  }
                  )
                  }
                </tbody>
              </table>
            </>
          )

          }
        </div>
        <UpdateHotel
          hotelEdit={hotel}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHotel>
      </main>
    </>
  );
};
