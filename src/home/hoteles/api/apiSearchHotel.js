import axios from 'axios'
import Swal from 'sweetalert2'

const URL = "http://localhost:8080/api/buscar/hoteles/";

export const apiSearchHotel = async (nombreHotel) => {
    try {
        const { data: { results } } = await axios.get(`${URL}${nombreHotel}`);
        return results;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la busqueda de hoteles',
            text: msg
        });
    }
}
