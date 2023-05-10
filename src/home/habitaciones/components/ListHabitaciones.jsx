import { useEffect, useState } from 'react'
import { apiHabitaciones } from '../api/apiHabitaciones';
import { GetHabitaciones } from './GetHabitaciones';

export const ListHabitaciones = () => {
    const [listHabitaciones, setListHabitaciones] = useState([]);

    const viewHabitacionesList = async () => {
        const getListHabitacionesFromAPI = await apiHabitaciones();
        setListHabitaciones(getListHabitacionesFromAPI);
    }

    useEffect(() => {
        viewHabitacionesList();
    }, []);

    return (
        <>
            <GetHabitaciones 
                descripcion="Mira las mejores habitaciones de la Ciudad:" 
                listHabitaciones={listHabitaciones} />
        </>
    )
}
