import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { habitByHotel } from "../api/habitaByHotel";

export const UserListHabita = () => {

    const loc = useLocation();
    const id = loc.state;
    localStorage.setItem('id', id);

    const idHotel = localStorage.getItem('id');

    //console.log(idHotel);

    const [listHabita, setListHabita] = useState([]);

    const viewHabitList = async () => {
        const result = await habitByHotel(idHotel);
        setListHabita(result);
    };

    useEffect(() => {
        viewHabitList();
    }, []);

    return (
        <>
            <main className="contenedor seccion">
                <Link to="/hoteles-lista"
                    className="boton boton-verde mt-3"
                >
                    Volver
                </Link>
                <h1>Habitaciones disponibles: </h1>
                <div >
                    {!listHabita.length > 0 ? (
                        <article >
                            <h3>No hay habitaciones disponibles para este hotel :(</h3>
                        </article>
                    ) : (
                        listHabita.map((u) => {
                            return (
                                <div className="contenedor-anuncios" key={u._id}>

                                    <div className="anuncio" key={u._id}>
                                        <img
                                            loading="lazy"
                                            src={u.img}
                                            alt="Habitacion img"
                                        />
                                        <div className="contenido-anuncio">
                                            {/* <h3>Habitación</h3> */}
                                            <p>{u.descripcion}</p>
                                            <p className="precio">Q.{u.precio}</p>
                                            <ul className="iconos-caracteristicas">
                                                <li>
                                                    {/* icono de cama */}
                                                    <p>Capacidad: {u.capacidad}</p>
                                                </li>
                                            </ul>
                                            <a href="#" className="boton boton-amarillo-block"
                                            >Reservar ahora</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    )

                    }
                </div>
                <div className="contenedor-anuncios" >

                    {/* {
                        listHabita.map((u) => {
                            return (
                                <div className="anuncio" key={u._id}>
                                    <img
                                        loading="lazy"
                                        src={u.img}
                                        alt="Habitacion img"
                                    />
                                    <div className="contenido-anuncio">
                                        <p>{u.descripcion}</p>
                                        <p className="precio">Q.{u.precio}</p>
                                        <ul className="iconos-caracteristicas">
                                            <li>
                                                <p>Capacidad: {u.capacidad}</p>
                                            </li>
                                        </ul>
                                        <a href="#" className="boton boton-amarillo-block"
                                        >Reservar ahora</a
                                        >
                                    </div>
                                </div>


                            )
                        })

                    } */}
                </div>
            </main>
        </>
    )
}
