import Swal from "sweetalert2"
import { apiDepartamentosCreate, apiDepartamentosUpdate } from "../api/apiDepartamentos";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({ nombre: Yup.string().required('El nombre es requerido') });

export const formOptions = { resolver: yupResolver(formSchema) };

export const formDepartamentoHelper = async (departamento, option) => {
    let resultado;

    switch (option) {
        case 1:
            resultado = await apiDepartamentosCreate(
                departamento.departamento.nombre
            );

            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Departamento creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/departamentos'
                    } else {
                        window.location.href = '/departamentos'
                    }
                })
            }
            break;

        case 2:
            resultado = await apiDepartamentosUpdate(
                departamento.departamentosProp._id,
                departamento.departamentosProp.nombre,

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
                        window.location.href = '/departamentos'
                    } else {
                        window.location.href = '/departamentos'
                    }
                })
            }
            break;
    }



}
