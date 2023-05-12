import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/facturas/";




// Mostrar informacion
export const apiFactura = async () => {
    try {

        const { data: { listaFacturas } } = await axios.get(`${URL}`,
        { headers: { "x-token": token } });
       
        return listaFacturas;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}


//API ruta para crear un usuarioc
export const apiFacturaCreate = async (NITReceptor) => {
    
    try {
       
        const userSave = await axios.post(
            `${URL}agregar`, {
            NITReceptor: NITReceptor

        }, { headers: { "x-token": token } });

       
        return true;

    } catch ({ response: { data: { msg } } }) {
        
        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
