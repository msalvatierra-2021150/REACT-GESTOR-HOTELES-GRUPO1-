import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/hoteles/";

const URLU = "http://localhost:8080/api/adminHotel/mostrar-all";

const URLD = "http://localhost:8080/api/departamentos/";

const URLE = "http://localhost:8080/api/evento/";

// Mostrar informacion
export const apiHotelHabitaciones = async (id) => {
    try {

        const { data: { arregloHabitaciones } } = await axios.get(`${URL}habitacionesH/${id}`,
        { headers: { "x-token": token } });
       console.log(arregloHabitaciones);
        return arregloHabitaciones;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}
export const apiHotel = async () => {
    try {

        const { data: { listaHoteles } } = await axios.get(`${URL}`,
            { headers: { "x-token": token } });

        return listaHoteles;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
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
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }

}


export const apiDepartamento = async () => {
    try {

        const { data: { listaDepartamentoNombre } } = await axios.get(`${URLD}`,
            { headers: { "x-token": token } });

        return listaDepartamentoNombre;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }

}

export const apiEvent = async () => {
    try {

        const { data: { listaEventos } } = await axios.get(`${URLE}`,
            { headers: { "x-token": token } });

        return listaEventos;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
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

export const apiEventsHotel = async (id) => {
    try {

        const { data: { msg } } = await axios.get(`${URL}eventosH/${id}`,
            { headers: { "x-token": token } });
        return msg;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
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
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }

}

export const apiAddEvent = async (hotelAddEventId, evento) => {
    try {

        const newHotel = await axios.put(
            `${URL}eventos/push/${hotelAddEventId}`,{ 
                evento: evento 
            }, { headers: { "x-token": token } });
        return true;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
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
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }

}


export const apiHotelCreate = async (nombre, direccion, departamento, nit, rating, numero_reservaciones, img, descripcion, usuario) => {

    try {


        const userSave = await axios.post(
            `${URL}agregar`, {
            nombre: nombre,
            direccion: direccion,
            departamento: departamento,
            nit: nit,
            rating: rating,
            numero_reservaciones: numero_reservaciones,
            img: img,
            descripcion: descripcion,
            usuario: usuario
        }, { headers: { "x-token": token } });



        return true;

    } catch ({ response: { data: { msg } } }) {

        if (msg === "Token no válido") {
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
        } else{
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
export const apiHotelUpdate = async (id, nombre, direccion, departamento, nit, rating, numero_reservaciones, img, descripcion, usuario) => {
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,
            direccion: direccion,
            departamento: departamento,
            nit: nit,
            rating: rating,
            numero_reservaciones: numero_reservaciones,
            img: img,
            descripcion: descripcion,
            usuario: usuario


        }, { headers: { "x-token": token } });
        console.log(userSave);


        return true;

    } catch ({ response: { data: { msg } } }) {

        if (msg === "Token no válido") {
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
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
        console.log(msg);
    }

}

export const apiHotelDelete = async (id) => {
    try {
        const { } = await axios.delete(`${URL}/eliminar/${id}`,
            { headers: { "x-token": token } });
        return true;
    } catch ({ response: { data: { msg } } }) {

        if (msg === "Token no válido") {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (msg) {
            return msg;
        }
    }

}