import { useEffect, useState } from "react";
import { buscarHotel } from "../api/habitaByHotel";
import { Link } from "react-router-dom";

export const UserSearchHotel = ({ term }) => {
  const [listaHoteles, setListaHoteles] = useState([]);

  const viewHotelList = async () => {
    const getHotelFromApi = await buscarHotel(term);
    //console.log(term);
    setListaHoteles(getHotelFromApi);
  };

  useEffect(() => {
    viewHotelList();
  }, []);

  return (
    <>
      <section className="contenedor seccion">
        {!listaHoteles.length > 0 ? (
          <article>
            <h3>Resultado no encontrado</h3>
          </article>
        ) : (
          listaHoteles.map((u) => {
            return (
              <article className="entrada-blog" key={u._id}>
                <div className="imagen">
                  <picture>
                    {/* <source srcSet="build/img/westin.jpg" type="image/webp" /> */}
                    <source srcSet={u.img} type="image/jpeg" />
                    <img loading="lazy" src={u.img} alt={u.nombre} />
                  </picture>
                </div>
                <div className="texto-entrada">
                  <h4>{u.nombre}</h4>

                  <p className="fs-3 mt-3">{u.rating} estrellas</p>
                  <p className="fs-3 mt-3">{u.direccion}</p>
                  <p>
                    <textarea
                      className="form-control"
                      rows="4"
                      disabled={true}
                      defaultValue={u.descripcion}
                    ></textarea>
                  </p>
                  <div className="row">
                    <p className="col-lg-6 col-sm-12">
                      <Link
                        to="/habitaciones-lista"
                        className="boton boton-verde mt-3"
                        state={u._id}
                      >
                        Ver habitaciones
                      </Link>
                    </p>
                    <p className="col-lg-6 col-sm-12">
                      <Link
                        to="/eventos-lista"
                        className="boton boton-verde mt-3"
                        state={u._id}
                      >
                        Ver eventos
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>
    </>
  );
};
