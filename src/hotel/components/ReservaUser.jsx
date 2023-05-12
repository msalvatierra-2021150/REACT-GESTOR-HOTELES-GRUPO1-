import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { apiReservasHotel, apiUsuarioEnHotel } from '../api/apiHotel';


export const ReservaUser = () => {

    const loc = useLocation();
    const id = loc.state;
    localStorage.setItem('id', id);

    const idHotel = localStorage.getItem('id');

    //console.log(idHotel);

    const [listReserv, setListReserv] = useState([]);

    const viewReservList = async () => {
        const result = await apiUsuarioEnHotel(idHotel);
        setListReserv(result);
    };

    useEffect(() => {
        viewReservList();
    }, []);

    return (
        <>
            <main className="contenedor seccion">
                <h1>Administrador de Hoteles</h1>
                <Link to="/lista-hoteles"
                    className="boton boton-verde mt-3"
                >
                    Volver
                </Link>
                <h1>Reservaciones del hotel: </h1>
                <div >
                    {
                        !listReserv.length > 0 ? (
                            <article className='text-center' >
                                <h3>El usuario no esta hospedo en algun hotel del administrador</h3>
                            </article>
                        ) : (
                            listReserv.map((u) => {
                                return (
                                    <>
                                        <div className="contenedor-anuncios">

                                            <div className="anuncio" key={u._id}>

                                                <div className="contenido-anuncio">
                                                    <p>
                                                        <b>Reserva Id:</b>
                                                        {u._id}
                                                    </p>

                                                    <hr />

                                                    <p> <b>Inicio:</b> {new Date(u.fechaInicio)
                                                        .toLocaleString('es-ES', {
                                                            day: '2-digit', month: '2-digit',
                                                            year: 'numeric', hour: '2-digit',
                                                            minute: '2-digit', second: '2-digit'
                                                        })
                                                    }
                                                    </p>
                                                    <p> <b>Finaliza:</b> {new Date(u.fechaFin)
                                                        .toLocaleString('es-ES', {
                                                            day: '2-digit', month: '2-digit',
                                                            year: 'numeric', hour: '2-digit',
                                                            minute: '2-digit', second: '2-digit'
                                                        })
                                                    }
                                                    </p>
                                                    <p>
                                                        <b>Habitación Id: </b>
                                                        {u.habitaciones[0].habitacion_id}
                                                    </p>
                                                    <p>
                                                        <b>Total: </b>
                                                        Q {u.total}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>


                                )
                            })
                        )
                    }
                </div>
            </main>
        </>
    )
}
