import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = 'http://localhost:8080/api/habitaciones/';


export const apiHabitaciones = async () => {
    try {
        const { data: { listaHabitaciones } } = await axios.get(`${URL}`,
            { headers: { 'x-token': token } });

        return listaHabitaciones;
    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }
};

export const apiHabitacionesHotel = async (idHotel) => {
    try {
        const { data: { listaHabitacionesHotel } } = await axios.get(`${URL}hotel/${idHotel}`,
            { headers: { 'x-token': token } });
        return listaHabitacionesHotel;
    } catch ({ response: { data: { msg } } }) {
        return msg;
    }
}

export const apiHabitacionesById = async (idHabitacion) => {
    try {
        const { data: { habitacionById } } = await axios.get(`${URL}${idHabitacion}`,
            { headers: { 'x-token': token } });

        return habitacionById;
    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }
}