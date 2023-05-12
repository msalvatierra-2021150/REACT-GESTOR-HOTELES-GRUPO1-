import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ListHabitacion } from '../../habitaciones/components/ListHabitacion';
import { apiReservaPushHab, apiReservasById } from '../api/apiReserva';
import Swal from 'sweetalert2';

export const AddHabitacion = () => {
    const [reserva, setReserva] = useState([]);
    let { search } = useLocation();
    let query = new URLSearchParams(search);
    let idhabitacion = query.get('habitacion');
    let idreservacion = query.get('reserva');

    const viewReserva = async () => {
        const getReservaFromAPI = await apiReservasById(idreservacion);
        setReserva(getReservaFromAPI);
    };
    useEffect(() => { viewReserva(); }, []);
    const addHabitacion = async () => {
        const response = await apiReservaPushHab(idhabitacion, idreservacion);
        if (response) {
            Swal.fire({
                icon: 'success',
                title: 'Habitacion Agregada',
                text: 'Se ha agregado correctamente la habitacion a la reserva',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/see-habitaciones";
                } else { 
                    window.location.href = "/see-habitaciones";
                }
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'No se ha podido agregar la habitacion a la reserva',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            })
        }
    };
    return (
        <>
            <div className="container text-left">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <ListHabitacion idhabitacion={idhabitacion} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        {
                            reserva.map((r) => {
                                return (
                                    <div className="card mb-3" key={r._id}>
                                        <div className="card-body">
                                            <p className="card-title">Detalles de tu reservación actual:</p>
                                            <p className="card-text">Número de Habitaciones en tu reserva: {r.habitaciones.length}</p>
                                            <p className="card-text">Total: {r.total}</p>
                                            <p className="card-text">
                                                <small className="text-muted">Fecha Inicio: {r.fechaInicio}</small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">Fecha Fin: {r.fechaFin}</small>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <Link className="boton boton-verde" to={"/habitaciones"}>Cancelar</Link>
                    </div>
                    <div className="col">
                        <button className="boton boton-verde"
                            onClick={() => addHabitacion()}>
                            Agregar a mi Reserva
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
