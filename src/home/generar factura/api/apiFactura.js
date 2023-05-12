import axios from 'axios'
import Swal from 'sweetalert2'

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/facturas/";

export const apiFacturaCreate = async (NITReceptor) => {
    try {
        const response = await axios.post(`${URL}agregar`, {
            NITReceptor
        }, { headers: { 'x-token': token } });
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en generar su factura',
            text: msg
        });
        return false;
    }
}
