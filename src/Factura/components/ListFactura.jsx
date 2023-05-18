import React from "react";
import { useEffect, useState } from "react";
import { apiFactura } from "../api/apiFactura";
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import { Hoteles } from "./Hoteles";
import { ListHistorial } from './ListHistorial';
import { ListServicios } from "./ListServicios";
import { Link } from "react-router-dom";

export default function ListFactura() {
  const [factura, setFactura] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState();
  const [componets, setComponet] = useState();
  const viewFacturaList = async () => {
    const getListFacturasFromAPI = await apiFactura();

    setFactura(getListFacturasFromAPI);
  };
  useEffect(() => {
    viewFacturaList();
  }, []);

  //----------------- modal---------


  const handleOpenModal = (f, components) => {
    setComponet(components)
    setShowModal(true);
    setUser(f);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  useEffect(() => {
    viewFacturaList();
  }, [showModal]);
  //-------------------------------------
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString('es-ES', options);
  }

  return (
    <>
      <main className="container seccion">
        
      <Link className="boton boton-verde" to={"/panel-adminhotel"}>Regresar</Link>
        <h1>Facturas de  </h1>

        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">NIT Emisor</th>
              <th className="text-center">Cliente</th>
              <th className="text-center">NIT Receptor</th>
              <th className="text-center">Historial de servicios</th>
              <th className="text-center">Total</th>
              <th className="text-center">Fecha</th>
              <th className="text-center">Hora</th>
              <th className="text-center">Hitorial de Hoteles</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {factura.map((f) => {
              return (
                <tr key={f._id}>
                  <th className="text-center">{f._id} </th>
                  <th className="text-center">{f.NITEmisor} </th>
                  <th className="text-center">{f.usuario.nombre} </th>
                  <th className="text-center">{f.NITReceptor} </th>
                
                  <th className="text-center">
                      <button
                        className="btn btn-success ms-2 w-100"
                        onClick={() => handleOpenModal(f,  <ListServicios carr={f}></ListServicios>)}
                      >
                        Historail de servicios
                      </button>              

                  </th>
                  <th className="text-center">{f.total} </th>
                  <th className="text-center">{formatDate(f.fecha)} </th>
                  <th className="text-center">{formatTime(f.fecha)} </th>
                  <th className="text-center">
                    <button
                      className="btn btn-success ms-2 w-100"
                      onClick={() => handleOpenModal(f, <ListHistorial></ListHistorial>)}
                    >
                      Historail de hoteles
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Hoteles
          user={user}
          isOpen={showModal}
          onClose={() => handleCloseModal()

          }
          componet={componets}
        ></Hoteles>
      </main>
    </>
  );
}
