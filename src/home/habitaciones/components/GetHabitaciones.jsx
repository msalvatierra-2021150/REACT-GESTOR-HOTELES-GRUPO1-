import { Link } from 'react-router-dom';
import icono_dormitorio from '../../../img/icono_dormitorio.svg';
import encuentra from '../../../img/encuentra.jpg';

const idReserva = localStorage.getItem('idReservacion');
export const GetHabitaciones = ({descripcion, listHabitaciones}) => {
    return (
        <>
            <Link className="boton boton-verde" to={"/home"}>Regresar</Link>
            <div className="container seccion">
                <h1>{descripcion}</h1>
                {
                    listHabitaciones.map((h) => {
                        return (
                            <div className="anuncio" key={h._id}>
                                <img loading="lazy" src={encuentra} alt="anuncio" />
                                <div className="contenido-anuncio">
                                    <h3>Habitación De lujo, 1 King</h3>
                                    <p>
                                        {h.descripcion}
                                    </p>
                                    <p className="precio">Precio: {h.precio}</p>
                                    <ul className="iconos-caracteristicas">
                                        <li>
                                            <img className="icono" loading="lazy" src={icono_dormitorio} alt="icono habitaciones" />
                                            <p>{h.capacidad}</p>
                                        </li>
                                    </ul>
                                    {(idReserva === null)
                                        ? <Link className="boton boton-amarillo-block" to={`/reservas-create?habitacion=${h._id}`}>Reservar</Link>
                                        : <Link className="boton boton-amarillo-block" to={`/reservas-add?habitacion=${h._id}&reserva=${idReserva}`}>Agregar a tu reserva</Link>
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
