import axios from 'axios'
import Swal from 'sweetalert2'

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/reservaciones/'

export const apiReservasById = async (idReserva) => {

    try {
        const { data: { reservation } } = await axios.get(`${URL}${idReserva}`,
            { headers: { 'x-token': token } });
        return reservation;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en listar la reservacion',
            text: data.msg
        });
    }
}

export const apiReservasClient = async (idReserva) => {

    try {
        const { data: { matchs } } = await axios.get(`${URL}client/reservacion/${idReserva}`,
            { headers: { 'x-token': token } });
        return matchs;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en listar la reservacion',
            text: data.msg
        });
    }
}

export const apiReservaCreate = async (idHabitacion, fechaStart, horaStart, fechaEnd, horaEnd) => {
    try {
        const response = await axios.post(`${URL}agregar/${idHabitacion}`, {
            fechaStart,
            horaStart,
            fechaEnd,
            horaEnd
        }, { headers: { 'x-token': token } });
        const idReservacion = response.data.id;
        //Guardar el id de la reservacion en el local storage del navegador
        (idReservacion) ? localStorage.setItem('idReservacion', idReservacion) : null;
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la creacion de la reservacion',
            text: msg
        });
    }
}

export const apiReservaPushHab = async (habitacion_id, idReservacion) => {
    try {
        const response = await axios.post(`${URL}agregarHabitacion/${idReservacion}`, {
            habitacion_id
        }, { headers: { 'x-token': token } });
        console.log(response);
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la creacion de la reservacion',
            text: msg
        });
    }
}

export const apiReservaDeleteHab = async (habitacion_id, idReserva) => {
    try {
        const deleteHab = await axios.delete(`${URL}eliminar/habitacion/${idReserva}`, {
            data: { habitacion_id },
            headers: { 'x-token': token }
        });
        console.log(deleteHab);
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la eliminacion de la habitacion en su reservacion',
            text: msg
        });
        console.log(msg);
    }
}

export const apiReservaDelete = async (idReserva) => {
    try {
        const response = await axios.delete(`${URL}eliminar/${idReserva}`
            , { headers: { 'x-token': token } });
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la eliminacion de su reservacion',
            text: msg
        });
        console.log(msg);
    }
}

export const apiReservaUpdate = async (idReserva, fechaStart, horaStart, fechaEnd, horaEnd) => {
    try {
        const response = await axios.put(`${URL}editar/${idReserva}`, {
            fechaStart,
            horaStart,
            fechaEnd,
            horaEnd
        }, { headers: { 'x-token': token } });
        console.log(response);

        return true;
    } catch ({ response: { data: { msg } } }) {
        if (msg === 'Token no válido') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar la reserva',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            }).then((result) => {
                console.log(result)
            })
        }
    }
}