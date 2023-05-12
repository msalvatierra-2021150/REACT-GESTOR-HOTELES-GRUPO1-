import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { habitByHotel } from '../../home/api/habitaByHotel';
import { apiHabitacionesActivas } from '../api/apiHotel';

export const ListHabita = () => {

    const loc = useLocation();
    const id = loc.state;
    localStorage.setItem('id', id);
    const idHotel = localStorage.getItem('id');

    const [listHabita, setListHabita] = useState([]);
    const [habiDisponi, setHabiDisponi] = useState(0);

    const viewHabitList = async () => {
        const result = await habitByHotel(idHotel);
        setListHabita(result);
        countHabi();
    };

    const countHabi = async () => {
        const result = await apiHabitacionesActivas(idHotel);
        setHabiDisponi(result);
    };

    useEffect(() => {
        viewHabitList();
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
                <h1>Habitaciones disponibles: <b>{habiDisponi}</b> </h1>
                <div className="contenedor-anuncios" >
                    {
                        listHabita.map((u) => {
                            return (


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
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}
