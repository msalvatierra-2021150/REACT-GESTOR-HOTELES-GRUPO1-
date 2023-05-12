import Swal from "sweetalert2"
import { apiHotelCreate,apiHotelUpdate } from "../api/apiHotel";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    direccion: Yup.string().required('La direccion es requerido'),
    departamento: Yup.string().required('El departamento es requerido'),
    nit: Yup.string().required('El nit es requerido'),
    rating: Yup.number().required('El rating es requerido'),
    numero_reservaciones: Yup.number().required('El # de reservaciones es requerido'),
    img: Yup.string(),
    usuario: Yup.number().required('El ID del Admin del hotel es requerido'),
    evento: Yup.string()
});
/*.


El código anterior sirve para obtener un usuario en específico, en dicho código existe una línea de código que hará que la función no trabaje de manera correcta, reescriba la línea de código para que la función pueda funcionar correctamente.= La respuesta correcta es: let userId = req.params.id;
GitHub es un sistema online de trabajo y manejo de repositorio de Git.//verdadero

*/
export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (hotel, option) => {
  /*
¿Qué resultado podría esperar de ésta validación?6 === "6"//FALSE
NPM es un//Gestor de paquetes de JavaScript
Por defecto, GitHub usa la rama main como la rama principal
¿Podemos cambiar la rama principal?//verdadero
  */
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiHotelCreate(
                hotel.nombre,
                hotel.direccion,
                hotel.departamento,
                hotel.nit,
                hotel.rating,
                hotel.numero_reservaciones,
                hotel.img,
                hotel.descripcion,
                hotel.usuario,
                hotel.eventos
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/hoteles'
                    } else {
                        window.location.href = '/hoteles'
                    }
                })
            }
        break;
/*
Protocolo que utilizamos para comunicar la solicitud del cliente con el servidor web,
el cual también posee códigos de estatus, que agregamos en la respuesta.//HTTP
**/
        case 2:
            resultado = await apiHotelUpdate(
                hotel._id,
                hotel.nombre,
                hotel.direccion,
                hotel.departamento,
                hotel.nit,
                hotel.rating,
                hotel.numero_reservaciones,
                hotel.img,
                hotel.decripcion,
                hotel.usuario,
            );
  /*
  ¿Qué resultado podría esperar ésta validación?1 = "1"//Sintax Error
¿Qué es un array en JavaScript?// es una estructura de datos de tipo objeto
  */
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;
    }

/*
¿Cuáles son los tipos de Scope que tenemos en JavaScript?//Scope Global y Scope Local
¿Se puede conectar un repositorio local con más de un repositorio remoto?//verdadero
¿Qué podemos esperar al llamar al método .pop(); de javascript?//Borrar el último elemento de mi array
*/

}
