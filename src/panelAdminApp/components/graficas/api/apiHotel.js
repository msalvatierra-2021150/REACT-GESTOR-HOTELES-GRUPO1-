import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/hoteles/";



// Mostrar informacion
export const apiHotel = async () => {
    try {

        const { data: { listaHoteles } } = await axios.get(`${URL}`,
        { headers: { "x-token": token } });
       
        return listaHoteles;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

//mostrar las habitaciones por reserva
export const apiHotelHabitaciones = async (id) => {
    try {

        const { data: { arregloHabitaciones } } = await axios.get(`${URL}habitacionesH/${id}`,
        { headers: { "x-token": token } });
       
        return arregloHabitaciones;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}



