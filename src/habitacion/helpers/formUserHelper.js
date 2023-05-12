import Swal from "sweetalert2"
import { apiHabitacionCreate,apiHabitacionUpdate } from "../api/apiHabitacion";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    precio: Yup.number().required('El precio es requerido'),
    descripcion: Yup.string().required('La descripcion es requerida'),
    img: Yup.string(),
    capacidad: Yup.string().required('La capacidad es requerida'),
    hotel: Yup.string().required('El hotel es requerido'),
    usuario: Yup.string().required('El ID del Admin del hotel es requerido'),
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (habitacion, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiHabitacionCreate(
                habitacion.precio,
                habitacion.descripcion,
                habitacion.img,
                habitacion.capacidad,
                habitacion.hotel,
                habitacion.usuario,
                habitacion.disponible
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Habitacion creada correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/habitaciones'
                    } else {
                        window.location.href = '/habitaciones'
                    }
                })
            }
        break;

        case 2:
            resultado = await apiHabitacionUpdate(
                habitacion._id,
                habitacion.precio,
                habitacion.descripcion,
                habitacion.img,
                habitacion.capacidad,
                habitacion.hotel,
                habitacion.usuario,
                habitacion.disponible,
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/habitaciones'
                    } else {
                        window.location.href = '/habitaciones'
                    }
                })
            }
        break;
    }



}
