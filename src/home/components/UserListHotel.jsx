import { useEffect, useState } from "react";
import { apiHotel } from "../../hotel/api/apiHotel";
import { Link } from "react-router-dom";
import { UserSearchHotel } from "./UserSearchHotel";
import { NavbarInicial } from "../../login/components/NavbarInicial";

export const UserListHotel = () => {
  const [listaHoteles, setListaHoteles] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [showResultado, setShowResultado] = useState(false);

  const button = document.getElementById("botonBusqueda");

  const viewHotelList = async () => {
    const getHotelFromApi = await apiHotel();
    setListaHoteles(getHotelFromApi);
  };

  useEffect(() => {
    viewHotelList();
  }, []);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const mostrarResultado = () => {
    setShowResultado(!showResultado);
    if (busqueda.trim() == "") {
      setShowResultado(false);
    }
    if (button.value == "Cancelar") {
      setBusqueda("");
    }
  };

  const searchStyle = {
    width: "100 %",
    position: "relative",
    display: "flex",
  };

  const searchTermStyle = {
    width: "100 %",
    border: "3px solid #71b100",
    padding: "5px",
    margin: "8px",
    outline: "none",
    color: "#000",
    fontWeight: "700",
  };

  const searchButtonStyle = {
    border: "1px solid #71b100",
    background: "#71b100",
    textAlign: "center",
    color: "#fff",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <>
      {localStorage.getItem("token") ?  [] : [<NavbarInicial/>]}

      <main className="contenedor seccion">
      {localStorage.getItem("token") ?  
      [<Link className="boton boton-verde" to={"/home"}>Regresar</Link>  ]
       : [<Link className="boton boton-verde" to={"/"}>
        Regresar</Link>]}

        <div className="container" style={searchStyle}>
          <input
            type="text"
            placeholder="Buscar hotel... "
            style={searchTermStyle}
            value={busqueda}
            onChange={handleBusqueda}
            disabled={showResultado}
          />
          <button
            type="submit"
            id="botonBusqueda"
            style={searchButtonStyle}
            onClick={mostrarResultado}
            value={showResultado ? "Cancelar" : "Buscar"}
          >
            {showResultado ? "Cancelar" : "Buscar"}
          </button>
        </div>

        <h1>Nuestros Hoteles</h1>

        <div>
          {showResultado ? (
            <UserSearchHotel term={busqueda} />
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

                    <p className="fs-3 mt-3">{u.direccion}</p>
                    <p>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          rows="4"
                          disabled={true}
                          defaultValue={u.descripcion}
                        ></textarea>
                      </div>
                    </p>

                    <p className="fs-3 mt-3">{u.rating} estrellas</p>
                    <div className="container">
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
                  </div>
                </article>
              );
            })
          )}
        </div>
      </main>
    </>
  );
};
