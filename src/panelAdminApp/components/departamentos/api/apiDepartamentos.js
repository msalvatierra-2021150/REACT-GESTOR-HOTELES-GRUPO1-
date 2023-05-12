import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/departamentos/";



// Mostrar informacion
export const apiDepartamentos = async () => {
    try {

        const { data: { listaDepartamentoNombre } } = await axios.get(`${URL}`,
            { headers: { "x-token": token } });
        console.log(listaDepartamentoNombre);
        return listaDepartamentoNombre;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}


//API ruta para crear un usuarioc
export const apiDepartamentosCreate = async (nombre) => {
    try {

        const departamento = await axios.post(`${URL}agregar`, {
            nombre: nombre,
        });

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
        }else {
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
export const apiDepartamentosUpdate = async (id, nombre) => {
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,

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

export const apiDepartamentosDelete = async (id) => {
    try {
        const { } = await axios.delete(`${URL}eliminar/${id}`,
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