import { useEffect, useState } from "react";
import { eventByHotel } from "../api/habitaByHotel";
import { Link, useLocation } from "react-router-dom";

export const UserEventList = () => {

    const loc = useLocation();
    const id = loc.state;
    localStorage.setItem('id', id);

    const idHotel = localStorage.getItem('id');
    //console.log(idHotel);

    const [listEvents, setListEvents] = useState([]);

    const viewEventsList = async () => {
        const result = await eventByHotel(idHotel);
        setListEvents(result);
    };

    useEffect(() => {
        viewEventsList();
    }, []);

    return (

        <main className="contenedor seccion">

            <Link to="/hoteles-lista"
                className="boton boton-verde mt-3"
            >
                Volver
            </Link>
            <h1>Eventos del Hotel: </h1>
            <div>
                {!listEvents.length > 0 ? (
                    <article>
                        <h3>No hay eventos para este hotel :c</h3>
                    </article>
                ) : (
                    listEvents.map((u) => {
                        return (
                            <div className="contenedor-anuncios" key={u._id}>
                                <div className="anuncio" key={u._id}>
                                    <div className="contenido-anuncio">
                                        {/* <h3>Habitación</h3> */}
                                        <p className="text-center fs-1 txt-fluid">
                                            <b>{u.nombreEvento}</b>
                                        </p>
                                        <p> <b>Inicio:</b> {new Date(u.fechaHoraInicio)
                                            .toLocaleString('es-ES', {
                                                day: '2-digit', month: '2-digit',
                                                year: 'numeric', hour: '2-digit',
                                                minute: '2-digit', second: '2-digit'
                                            })
                                        }
                                        </p>
                                        <p> <b>Finaliza:</b> {new Date(u.fechaHoraFin)
                                            .toLocaleString('es-ES', {
                                                day: '2-digit', month: '2-digit',
                                                year: 'numeric', hour: '2-digit',
                                                minute: '2-digit', second: '2-digit'
                                            })
                                        }
                                        </p>

                                        <ul className="iconos-caracteristicas">
                                            <li>
                                                <p>Invitados: {u.cantidadUsuarios}</p>
                                            </li>
                                        </ul>
                                        {/* <a href="#" className="boton boton-amarillo-block"
                                        >Reservar ahora</a> */}
                                    </div>
                                </div>
                            </div>

                        )
                    })
                )
                }

            </div>

        </main>
    )
}
