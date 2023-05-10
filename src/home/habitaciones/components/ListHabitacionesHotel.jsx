import { useEffect, useState } from 'react'
import { apiHabitacionesHotel } from '../api/apiHabitaciones';
import { GetHabitaciones } from './GetHabitaciones';
import { useLocation } from 'react-router-dom';

export const ListHabitacionesHotel = () => {
    let { search } = useLocation();
    let query = new URLSearchParams(search);

    let idhotel = query.get('idhotel');
    const [listHabitaciones, setListHabitaciones] = useState([]);

    const viewHabitacionesList = async () => {
        const getListHabitacionesFromAPI = await apiHabitacionesHotel(idhotel);
        setListHabitaciones(getListHabitacionesFromAPI);
    }

    useEffect(() => { viewHabitacionesList(); }, []);

    return (
        <>
            <GetHabitaciones
                descripcion={`Mira las mejores habitaciones de tu hotel:`}	
                listHabitaciones={listHabitaciones} />
        </>
    )
}