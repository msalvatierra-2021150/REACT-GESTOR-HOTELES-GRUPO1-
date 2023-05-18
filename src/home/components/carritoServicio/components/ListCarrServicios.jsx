import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { apiServicioCartCreate, apiServicios } from "../api/apiServicios";

export const ListCarrServicios = () => {
  const [servicio, setServicio] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const viewServicioList = async () => {
    const getListServiciosFromAPI = await apiServicios();

    setServicio(getListServiciosFromAPI);
  };

  useEffect(() => {
    viewServicioList();
  }, []);
  let existe = false;
  const agregar = async (ItemId) => {
    existe = true;
    localStorage.setItem("existeCar", existe);
    const newCart = await apiServicioCartCreate(ItemId, cantidad);
    console.log(newCart);
    if (newCart) {
      Swal.fire({
        icon: "success",
        title: "Todo bien",
        text: "servicio creado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Go  !",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/carrito-servicios";
        } else {
          window.location.href = "/carrito-servicios";
        }
      });
    }
  };

  return (
    <>
      <h1> Servicios</h1>

      <div className="container padding-bottom-3x mb-1">

        <main className="contenedor seccion ">
        <Link className="boton boton-verde" to={"/home"}>Regresar</Link>
          {servicio.map((s) => {
            return (
              <div className="container ">
                <div className="container">
                  <div className="contenedor-anuncios" key={s._id}>
                    <div className="anuncio">
                      <div className="contenido-anuncio">
                        <h3>Nombre Servicio : {s.nombreServicio} </h3>
                        <p>Descripcion: {s.descripcion}</p>

                        <input
                          type="number"
                          onChange={({ target: { value } }) => {
                            setCantidad(cantidad + 1);
                          }}
                        ></input>

                        <p className="precio"> Precio :{s.precio} </p>

                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => agregar(s._id)}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                    <div>
                      <img
                        key={s.itemId}
                        src="https://watermark.lovepik.com/photo/20211126/large/lovepik-image-of-hotel-management-service-personnel-picture_501124936.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};
