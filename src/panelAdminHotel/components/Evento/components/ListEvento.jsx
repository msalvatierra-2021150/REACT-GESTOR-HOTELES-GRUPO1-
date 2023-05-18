import React from 'react'
import { useEffect, useState } from "react";
import { apiEvento } from "../api/apiEvento";
import { Link } from "react-router-dom";
import { apiEventoDelete } from "../api/apiEvento";
import Swal from "sweetalert2";
import { Evento } from "../models/models.evento";
import { UpdateEvento } from './UpdateEvento';


export const ListEvento = () => {

  const [evento, setEvento] = useState([]);
  
  const [eventoM, setEventoM] = useState(Evento);
  const [showModal, setShowModal] = useState(false);


  const viewEventoList = async () => {
    const getListEventoFromAPI = await apiEvento();

    setEvento(getListEventoFromAPI);
  };
  
 
  useEffect(() => {
    viewEventoList();
  }, []);


    //modal
    useEffect(() => {
      viewEventoList();
    }, [showModal]);
  
    //modal
    const handleOpenModal = (s) => {
    
      setShowModal(true);
      setEventoM({...s,
        fechaHoraStart:s.fechaHoraInicio.substr(0, 10),
        horaInicio:s.fechaHoraInicio.substr(11, 5),
        fechaHoraEnd:s.fechaHoraFin.substr(0, 10),
        horaFinal:s.fechaHoraFin.substr(11, 5),
        fechaHoraFin:undefined ,
        fechaHoraInicio:undefined         
                });
    
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const eliminarEvento = async (id) => {
      let result = await apiEventoDelete(id);
      if (result) {
        setEvento(evento.filter((s) => s._id !== id));
        Swal.fire({
          icon: "success",
          title: "Evento Eliminado",
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

    const formatDate = (dateString)=> {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString('es-ES', options);
    }

    const formatTime = (dateString)=> {
      const date = new Date(dateString);
      const options = { hour: 'numeric', minute: 'numeric' };
      return date.toLocaleTimeString('es-ES', options);
    }
  return (
    <>
      <main className="container seccion">
      <h1>Administrador de Evento</h1>
      <Link className="boton boton-verde" to={"/panel-adminhotel"}>Regresar</Link>
      <Link to="/create-evento" className="boton boton-verde">
        Nuevo Evento
      </Link>
      <table className="propiedades">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Cantidad de Usuarios</th>
            <th className="text-center">Fecha Inicial</th>
            <th className="text-center">Hora Inicial</th>
            <th className="text-center">Fecha Finaliza</th>
            <th className="text-center">Hora Final</th>
            <th className="text-center">Evento</th>
            <th className="text-center">Opciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {evento.map((e) => {
            return (
              <tr key={e._id}>
                <th className="text-center">{e._id} </th>
                <td className="text-center">{e.nombreEvento}</td>
                <td className="text-center">{e.cantidadUsuarios}</td>
                <td className="text-center">{formatDate(e.fechaHoraInicio)}</td>
                <td className="text-center">{formatTime(e.fechaHoraInicio)}</td>
                <td className="text-center">{formatDate(e.fechaHoraFin)}</td>
                <td className="text-center">{formatTime(e.fechaHoraFin)}</td>
                <td className="text-center">{e.tipoEvento.nombre}</td>
                
                <td>
                <button
                    className="btn btn-danger ms-2 w-100"
                    onClick={() => eliminarEvento(e._id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning ms-2 w-100"
                    onClick={() => handleOpenModal(e)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <UpdateEvento
        eventoEdit={eventoM}
        isOpen={showModal}
        onClose={() => handleCloseModal()}
      ></UpdateEvento>
    </main>
    </>
  )
}
  