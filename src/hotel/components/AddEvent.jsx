import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { apiAddEvent, apiEvent } from "../api/apiHotel";
import Swal from 'sweetalert2';

export const AddEvent = ({ hotelAddEventId }) => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState(0);
    const viewEvents = async () => {
        let result = await apiEvent();
        setEvents(result);
    };

    useEffect(() => { viewEvents(); }, []);

    const selectedEvent = (id) => setNewEvent(id);


    const handleSubmit = async (event) => {
        event.preventDefault();
        let result = await apiAddEvent(hotelAddEventId, newEvent);
        if (result === true) {
            Swal.fire({
                icon: 'success',
                title: 'Evento agregado',
                text: 'El evento se agrego a su hotel correctamente',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            })
        }
    };

    return (
        <>
            <p>Seleccione solo un evento y haga clic en guardar cambios: </p>
            <form className="formulario" onSubmit={handleSubmit}>
                <fieldset className="mt-5">
                    <legend>Seleccione el evento a agregar: </legend>
                    <label>Eventos Disponibles: </label>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" className="w-100" id="dropdown-basic">
                            Eventos
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            {
                                events.map((e) => (
                                    <Dropdown.Item key={e._id}
                                        onClick={() => selectedEvent(e._id)}
                                    >
                                        {e.nombreEvento}
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </fieldset>
                <button type="submit" className="btn btn-success">
                    Guardar cambios
                </button>
            </form>
        </>
    )
}
