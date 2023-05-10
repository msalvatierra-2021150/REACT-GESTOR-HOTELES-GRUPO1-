import { useEffect, useState } from 'react'
import { apiHabitacionesById } from '../api/apiHabitaciones';
import icono_dormitorio from '../../../img/icono_dormitorio.svg';
import encuentra from '../../../img/encuentra.jpg';

export const ListHabitacion = ({ idhabitacion }) => {
    const [id, setId] = useState([]);
    const viewHabitaciones = async () => {
        const getHabitacionFromAPI = await apiHabitacionesById(idhabitacion);
        setId(getHabitacionFromAPI);
    }
    useEffect(() => { viewHabitaciones(); }, []);

    return (
        <>
            {
                id.map((h) => {
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
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}
