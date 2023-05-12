import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/habitaciones/";

const URLU = "http://localhost:8080/api/adminHotel/mostrar-all";

const URLD = "http://localhost:8080/api/hoteles/";

// Mostrar informacion


export const apiHabitacion = async () => {
    try {

        const { data: { listaHabitaciones } } = await axios.get(`${URL}`, 
        { headers: { "x-token": token } });
       
        return listaHabitaciones;
        
    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}
export const apiHotel = async () => {
    try {

        const { data: { listaHoteles } } = await axios.get(`${URLD}`,
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
export const apiHabitacionCreate = async (precio, descripcion, img, capacidad,hotel, usuario, disponible) => {
    
    try {
       
        const userSave = await axios.post(
            `${URL}agregar`, {
            precio: precio,
            descripcion: descripcion,
            img: img,
            capacidad: capacidad,
            hotel: hotel,
            usuario:usuario,
            disponible: disponible,
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
export const apiHabitacionUpdate = async (id, precio, descripcion, img, capacidad,hotel, usuario, disponible) => {
    console.log(id);
    console.log(precio);
    console.log(descripcion);
    console.log(img);
    console.log(capacidad);
    console.log(hotel);
    console.log(usuario);
    console.log(disponible);
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            precio: precio,
            descripcion: descripcion,
            img: img,
            capacidad: capacidad,
            hotel: hotel,
            usuario:usuario,
            disponible: disponible
           
        }, { headers: { "x-token": token } });
        console.log(userSave);
        
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
                console.log(result);
            });
        }
    }

}

export const apiHabitacionDelete = async( id ) => {
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