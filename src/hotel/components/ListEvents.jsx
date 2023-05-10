import { useState, useEffect } from "react";
import { apiEventsHotel } from "../api/apiHotel";

export const ListEvents = ({ hotelListEventId }) => {

    const [events, setEvents] = useState([]);

    const viewEvents = async () => {
        let result = await apiEventsHotel(hotelListEventId);
        setEvents(result);
    };

    useEffect(() => { viewEvents(); }, []);

    return (
        <>
            <h4>Estos son los eventos en su hotel:</h4>
            {
                events.map((e) => (
                    <div className="card mb-3" key={e._id}>
                        <div className="card-body">
                            <p className="card-title">Evento: {e.nombreEvento}</p>
                            <p className="card-text">Personas: {e.cantidadUsuarios}</p>
                            <p className="card-text">
                                <small className="text-muted">Fecha Inicio: {e.fechaHoraInicio}</small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Fecha Fin: {e.fechaHoraFin}</small>
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
