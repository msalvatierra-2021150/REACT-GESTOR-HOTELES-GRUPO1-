import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/usuarios/";
const URLA = "http://localhost:8080/api/admin/mostrar-all"


// Mostrar informacion
export const apiUsuarios = async () => {
    try {

        const { data: { listaUsuariosNombre } } = await axios.get(`${URL}`,
            { headers: { "x-token": token } });
        console.log(listaUsuariosNombre);
        return listaUsuariosNombre;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

// Mostrar informacion
export const apiUsuariosAll = async () => {
    try {

        const { data: { listaUsuarios } } = await axios.get(`${URLA}`,
            { headers: { "x-token": token } });
        console.log(listaUsuarios);
        return listaUsuarios;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}

//API ruta para crear un usuarioc
export const apiUsuariosCreate = async (id, nombre, correo, password, rol, estado) => {

    try {

        const userSave = await axios.post(
            `${URL}agregar`, {
            id: id,
            nombre: nombre,
            correo: correo,
            password: password,
            rol: rol,
            estado: estado,
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
export const apiUsuariosUpdate = async (id, nombre, correo, password, rol, estado) => {
    console.log(id);
    console.log(nombre);
    console.log(correo);
    console.log(password);
    console.log(rol);
    console.log(estado);
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,
            correo: correo,
            password: password,
            rol: rol,
            estado: estado,

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

export const apiUsuariosDelete = async (id) => {
    try {
        const { } = await axios.delete(`${URL}/eliminar/${id}`,
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