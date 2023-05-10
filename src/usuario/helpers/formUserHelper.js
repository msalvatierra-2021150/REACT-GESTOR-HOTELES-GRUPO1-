import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiUsuarioCreate, apiUsuarioUpdate } from "../api/apiUsuario";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    password: Yup.string().required('La contrasena es requerida'),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const formUserHelper = async (usuario, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiUsuarioCreate(
                usuario.nombre,
                usuario.correo,
                usuario.password
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Usuario Creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/perfil'
                    } else {
                        window.location.href = '/perfil'
                    }
                })
            }
        break;
        case 2:
            resultado = await apiUsuarioUpdate(
                usuario.nombre,
                usuario.correo,
                usuario.password,
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Usuario editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/perfil'
                    } else {
                        window.location.href = '/perfil'
                    }
                })
            }
        break;
    }



}
