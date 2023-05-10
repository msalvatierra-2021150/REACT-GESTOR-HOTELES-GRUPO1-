import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/hoteles/";

const URLU = "http://localhost:8080/api/adminHotel/mostrar-all";


// Mostrar informacions
export const apiHotel = async () => {
    try {

        const { data: { listaHoteles } } = await axios.get(`${URL}`,
        { headers: { "x-token": token } });
       
        return listaHoteles;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}


export const apiUsuario = async () => {
    try {
        const { data: { listaUsuarios } } = await axios.get(`${URLU}`,
        { headers: { "x-token": token } });
       
        return listaUsuarios;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }

}
//API ruta para crear un usuarioc
export const apiHotelCreate = async (nombre) => {
    
    try {
       
        const userSave = await axios.post(
            `${URL}agregar`, {
            nombre: nombre,
        
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
            });
        }
    }

}
export const apiHotelUpdate = async (id,nombre) => {
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,
            
        
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
                    window.location.href = '/login';
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
            });
        }
    }

}

export const apiHotelDelete = async( id ) => {
    try {
        const {} = await axios.delete(`${URL}/eliminar/${id}`,
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