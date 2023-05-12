import Swal from "sweetalert2"
import { apiRolCreate, apiRolUpdate } from "../api/apiRol";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


export const formSchema = Yup.object().shape({
    rol: Yup.string().required('el rol es requerido'),

});

export const formOptions = { resolver: yupResolver(formSchema) };

export const formUserHelper = async (rol, option) => {


    let resultado;

    switch (option) {
        case 1:
            resultado = await apiRolCreate(
                rol.rol
            );

            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Rol creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/roles'
                    } else {
                        window.location.href = '/roles'
                    }
                })
            }
            break;

        case 2:
            
            resultado = await apiRolUpdate(
                rol._id,
                rol.rol,
            );
            console.log(resultado);
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Rol editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/roles'
                    } else {
                        window.location.href = '/roles'
                    }
                })
            }
            break;
    }



}
