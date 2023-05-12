import { Link, useLocation } from "react-router-dom"
import { apiCartReserva, apiReservaDelete, apiReservaDeleteHab, apiReservasClient } from "../api/apiReserva";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ListReserva = () => {
    const [reserva, setReserva] = useState([]);
    const [habitacionesReserva, setHabitacionesReserva] = useState([]);
    let { search } = useLocation();
    let query = new URLSearchParams(search);
    let idreservacion = query.get('reserva');

    const viewReserva = async () => {
        const getReservaFromAPI = await apiReservasClient(idreservacion);
        setReserva(getReservaFromAPI);
        setHabitacionesReserva(getReservaFromAPI[0].habitaciones);
    };

    useEffect(() => { viewReserva(); }, []);

    const eliminarHabitacion = async (habitacion_id) => {
        let result = await apiReservaDeleteHab(habitacion_id, idreservacion);
        if (result) {
            Swal.fire({
                icon: 'success',
                title: 'Habitacion Eliminada',
                text: 'Se ha eliminado correctamente',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'No se ha podido eliminar',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            })
        }
    }

    const eliminarReserva = async () => {
        let result = await apiReservaDelete(idreservacion);
        if (result) {
            localStorage.removeItem('idReservacion');
            Swal.fire({
                icon: 'success',
                title: 'Reserva Eliminada',
                text: 'Se ha eliminado correctamente',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/see-habitaciones";
                }
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'No se ha podido eliminar',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            })
        }
    }
    
    const confirmarReserva = async () => {
        let result = await apiCartReserva(idreservacion);
        if (result) {
            localStorage.removeItem('idReservacion');
            Swal.fire({
                icon: 'success',
                title: 'Reserva Confirmada',
                text: 'Su reserva ha sido agendada exitosamente',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/generar-factura";
                }
            })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'No se ha podido agendar su reserva',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            })
        }
    }

    return (
        <>
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Habitaciones en tu reserva</th>
                                <th className="text-center">Eliminar habitacion</th>
                                <th className="text-center">Sub-total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                habitacionesReserva.map((h) => {
                                    return (
                                        <tr key={h._id}>
                                            <td>
                                                <div className="product-item">
                                                    <a className="product-thumb" href="#"><img src="https://www.bootdey.com/image/220x180/FF0000/000000" alt="Product" /></a>
                                                    <div className="product-info">
                                                        <h4 className="product-title">Habitación De lujo, 1 King</h4>
                                                        <span><em>Capacidad:</em> {h.capacidad}</span>
                                                        <span><em>Descripcion:</em> {h.descripcion}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center text-lg text-medium">
                                                <button className="btn btn-outline-danger" 
                                                    onClick={() => eliminarHabitacion(h._id)}>
                                                    Eliminar habitacion
                                                </button>
                                            </td>
                                            <td className="text-center text-lg text-medium">Q{h.precio}</td>
                                            <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i className="fa fa-trash"></i></a></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="shopping-cart-footer">
                    <div className="column">
                        <i className="icon-arrow-left"></i>&nbsp;<Link className="btn btn-outline-secondary" to={"/see-habitaciones"}>Regresar</Link>
                        <button className="btn btn-success" onClick={() => confirmarReserva()}>
                            Confirmar mi Reserva
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => eliminarReserva()}>
                            Cancelar mi Reserva
                        </button>
                    </div>
                    <div className="column text-lg">
                        Total de tu reserva: <span className="text-medium">Q {reserva.map((r) => r.total)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
