import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/hoteles/";



// Mostrar informacion
export const apiHotel = async () => {
    try {

        const { data: { listaHoteles } } = await axios.get(`${URL}`,
        { headers: { "x-token": token } });
       
        return listaHoteles;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}



//API ruta para crear un usuarioc
export const apiHotelCreate = async (nombre, direccion, departamento, nit,rating , numero_reservaciones,img,descripcion,usuario) => {
    /*
    ¿De esta forma de define una lista ordenado con HTML?//falso
Nos permite descargar paquetes o módulos funcionales para nuestro proyecto en
NodeJs.//NPM

    */
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
            usuario:usuario
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
/*
¿Cuál es la estructura de base de datos en MongoDB?//documentos
¿Qué es Bootstrap?// un framework de css

*/
export const apiHotelUpdate = async (id,nombre, direccion, departamento, nit,rating , numero_reservaciones,img,descripcion,usuario) => {

    /*
¿Qué es el desarrollo web?//El proceso de modelar la estructura de una página
¿De esta manera se define el margen de un elemento en CSS?//verdadero
¿Cuál de los siguientes es un framework de NodeJS para la creación de API's?//Express
    */
    console.log(nit);
    console.log(rating);
    console.log(numero_reservaciones);
    console.log(img);
    console.log(descripcion);
    console.log(usuario);
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
   /*
Los controladores en Express son funciones que se utilizan para manejar
solicitudes HTTP. Se definen como funciones regulares o métodos de un objeto. Los
controladores se asignan a rutas utilizando el método get(), post(), put(), delete() de
Express.//verdadero
                */}
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