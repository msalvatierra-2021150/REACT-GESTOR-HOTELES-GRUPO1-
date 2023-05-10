import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
let userRole = ''
if (token) {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    userRole = decodedPayload.rol;
}

let URL = '';

export const apiUsuario = async () => {
    console.log(userRole);
    if (userRole == "ADMIN_APP") {
        URL = "http://localhost:8080/api/admin/";   
    } else if (userRole == "ADMIN_HOTEL") {
        URL = "http://localhost:8080/api/adminHotel/";
    } else {
        URL = "http://localhost:8080/api/clientes/";
    }
    try {
        const { data: { listaUsuarios } } = await axios.get(`${URL}mostrar`,
        { headers: { "x-token": token } });
       console.log(listaUsuarios);
        return listaUsuarios;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }
}

export const apiUsuarioCreate = async ( nombre, correo, password) => {

    if (userRole == "ADMIN_APP") {
        URL = "http://localhost:8080/api/admin/";   
    } else if (userRole == "ADMIN_HOTEL") {
        URL = "http://localhost:8080/api/adminHotel/";
    } else {
        URL = "http://localhost:8080/api/clientes/";
    }
    try {
        const userSave = await axios.post(`${URL}agregar`, {
            nombre: nombre,
            correo: correo,
            password: password
        } );
        console.log(userSave);
        
        return true;

    } catch (err) {
        console.log(err);
    }

}

export const apiUsuarioUpdate = async ( nombre, correo, password) => {
    if (userRole == "ADMIN_APP") {
        URL = "http://localhost:8080/api/admin/";   
    } else if (userRole == "ADMIN_HOTEL") {
        URL = "http://localhost:8080/api/adminHotel/";
    } else {
        URL = "http://localhost:8080/api/clientes/";
    }
    try {
        const userSave = await axios.put(`${URL}editar`, {
            nombre: nombre,
            correo: correo,
            password: password
        }, { headers: { "x-token": token } });
        console.log(userSave);
        
        return true;

    } catch ({ response: { data: { msg } } }) {
        
        if (msg === 'el token ha expirado') {
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
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

export const apiUsuarioDelete = async( ) => {
    if (userRole == "ADMIN_APP") {
        URL = "http://localhost:8080/api/admin/";   
    } else if (userRole == "ADMIN_HOTEL") {
        URL = "http://localhost:8080/api/adminHotel/";
    } else {
        URL = "http://localhost:8080/api/clientes/";
    }
    try {
        const {} = await axios.delete(`${URL}/eliminar`,
         { headers: { "x-token": token } });
         return true;
    } catch ({ response: { data: { msg } } }) {
        
        if (msg === 'el token ha expirado') {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (msg) {
            return msg;
        }
    }
}