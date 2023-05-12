import axios from 'axios';
import Swal from 'sweetalert2';


const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/servicios/";
const URLC = "http://localhost:8080/api/cartServicios/";

export const apiServicios = async () => {
    try {

        const { data: { listaServicios } } = await axios.get(`${URL}mostrar`,
        { headers: { "x-token": token } });
        console.log(listaServicios);
        return listaServicios;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}
export const apiCarritoServicios = async () => {
    try {

        const { data: { cart_servicios } } = await axios.get(`${URLC}mostrar`,
        { headers: { "x-token": token } });
        console.log(cart_servicios);
        return cart_servicios;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}
export const apiServicioCartCreate = async (itemId, cantidad) => {
    
    try {
       
        const servicioSave = await axios.post(
            `${URLC}agregar`, {
                itemId,
                cantidad
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
export const apiCartServicioUpdate = async (id) => {

    try {
        console.log(id);
        const cartSave = await axios.put(`${URLC}editar/${id}`, {
       
           
        }, { headers: { "x-token": token } });
     
        
        return true;

    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/carrito-servicios';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

export const apiCartServicioDelete = async( id ) => {
    try {
        const {} = await axios.delete(`${URLC}eliminar/${id}`,
         { headers: { "x-token": token } });
         return true;
    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (message) {
            return message;
        }
    }

}
export const apiCartServicioDeleteAll = async( ) => {
    try {
        const {} = await axios.delete(`${URLC}eliminarCarr`,
         { headers: { "x-token": token } });
         return true;
    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (message) {
            return message;
        }
    }

}