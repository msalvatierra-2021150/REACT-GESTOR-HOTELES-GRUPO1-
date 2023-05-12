import axios from 'axios';
import Swal from 'sweetalert2';


const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/facturas/";
const URLS = "http://localhost:8080/api/clientes/mostrarHistorial";
const URLH =  "http://localhost:8080/api/clientes/mostrarServicios";
export const apiFactura = async () => {
    try {

        const { data: { listaFacturas } } = await axios.get(`${URL}mostrar`,
        { headers: { "x-token": token } });
       
        return listaFacturas;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}
export const apiHistorialS = async () => {
    try {

        const { data: { serviciosU } } = await axios.get(`${URLH}`,
        { headers: { "x-token": token } });
        console.log(serviciosU);
        return serviciosU;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

export const apiHistorialServicio = async () => {
    try {
        
        const { data: { hoteles } } = await axios.get(`${URLS}`,
        { headers: { "x-token": token } });
        console.log(hoteles);
        return hoteles;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

export const apiFacturaR = () => {
}