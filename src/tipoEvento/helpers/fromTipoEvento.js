import Swal from "sweetalert2"
import { apiTipoEventoCreate,apiTipoEventoUpdate } from "../api/apiTipoEvento";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    precio: Yup.string().required('El precio es requerido'),
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (tipoEvento, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiTipoEventoCreate(
                tipoEvento.nombre,
                tipoEvento.precio,
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Tipo de evento creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/tipoEvento'
                    } else {
                        window.location.href = '/tipoEvento'
                    }
                })
            }
        break;

        case 2:
            resultado = await apiTipoEventoUpdate(
                tipoEvento._id,
                tipoEvento.nombre,
                tipoEvento.precio,
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Tipo de evento editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/tipoevento'
                    } else {
                        window.location.href = '/tipoevento'
                    }
                })
            }
        break;
    }



}