import axios from 'axios';
import Swal from 'sweetalert2';


const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/evento/";
const URLT = "http://localhost:8080/api/tipoEvento/mostrar";

export const apiEvento = async () => {
    try {

        const { data: { listaEventos } } = await axios.get(`${URL}`,
            { headers: { "x-token": token } });
        
        return listaEventos;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

export const apiTipoEvento = async () => {
    try {

        const { data: { listaTipoEventos } } = await axios.get(`${URLT}`,
            { headers: { "x-token": token } });
        
        return listaTipoEventos;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

export const apiEventoCreate = async (nombreEvento, cantidadUsuarios, fechaHoraStart, horaInicio, fechaHoraEnd, horaFinal, tipoEvento) => {

    try {
        
        const eventoSave = await axios.post(
            `${URL}agregar`, {
            nombreEvento: nombreEvento,
            cantidadUsuarios: cantidadUsuarios,
            fechaHoraStart: fechaHoraStart,
            fechaHoraEnd: fechaHoraEnd,
            horaInicio:horaInicio,
            horaFinal:horaFinal,
            tipoEvento: tipoEvento,

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
        } {
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

export const apiEventoUpdate = async (id, nombreEvento, cantidadUsuarios, estado, fechaHoraStart, horaInicio, fechaHoraEnd, horaFinal, tipoEvento) => {
    
    try {
        
        const eventoSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            estado:estado,
            nombreEvento: nombreEvento,
            cantidadUsuarios: cantidadUsuarios,
            fechaHoraStart: fechaHoraStart,
            fechaHoraEnd: fechaHoraEnd,
            horaInicio:horaInicio,
            horaFinal:horaFinal,
            tipoEvento: tipoEvento,

        }, { headers: { "x-token": token } });
        

        return true;

    } catch ({ response: { data: { msg } } }) {

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
        } {
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


export const apiEventoDelete = async( id ) => {
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