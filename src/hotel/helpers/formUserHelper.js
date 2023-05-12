import Swal from "sweetalert2"
import { apiFacturaCreate } from "../api/apiFactura";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    NITReceptor: Yup.string().required('La direccion es requerido'),

});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (factura, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiFacturaCreate(
                factura.NITReceptor
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Factura creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/facturas'
                    } else {
                        window.location.href = '/facturas'
                    }
                })
            }
        break;

    }



}
