import Swal from "sweetalert2"
import { apiEventoCreate,apiEventoUpdate } from "../api/apiEvento";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    nombreEvento: Yup.string().required('El nombre es requerido'),
    cantidadUsuarios: Yup.string(),
    estado: Yup.string(),
    fechaHoraStart: Yup.date().required('La fecha inicio es requerido'),
    fechaHoraEnd: Yup.date().required('La fecha fin es requerido'),
    horaInicio: Yup.string().required('La hora inicio es requerido'),
    horaFinal: Yup.string().required('La hora fin es requerido'),
    tipoEvento: Yup.string(),
});
 
export const formOptions = { resolver: yupResolver(formSchema) };

export const formEventoHelper = async (evento, option) => {

    let resultado;
    
    switch (option) {
        
        case 1:
            
            resultado = await apiEventoCreate(
                evento.nombreEvento,
                evento.cantidadUsuarios,
                evento.fechaHoraStart,
                evento.horaInicio,
                evento.fechaHoraEnd,
                evento.horaFinal,
                evento.tipoEvento
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "evento creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/list-evento'
                    } else {
                         window.location.href = '/list-evento'
                    }
                })
            }
        break;

        case 2:
            console.log(evento);
            resultado = await apiEventoUpdate(
                evento._id,
                evento.nombreEvento,
                evento.cantidadUsuarios,
                evento.estado,
                evento.fechaHoraStart,
                evento.horaInicio,
                evento.fechaHoraEnd,
                evento.horaFinal,
                evento.tipoEvento
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "evento editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/list-evento'
                    } else {
                        window.location.href = '/list-evento'
                    }
                })
            }
        break;
    }



}