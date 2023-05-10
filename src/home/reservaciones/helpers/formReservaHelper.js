import Swal from 'sweetalert2'
import { apiReservaCreate, apiReservaUpdate } from '../api/apiReserva';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
    fechaStart: Yup.date().required('La fecha inicio es requerido'),
    horaStart: Yup.string().required('La hora inicio es requerido'),
    fechaEnd: Yup.date().required('La fecha fin es requerido'),
    horaEnd: Yup.string().required('La hora fin es requerido'),
    idHabitacion: Yup.string().required('La habitacion es requerida')
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const formReservaHelper = async (reserva, option) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const habitacionId = params.habitacion;

    let resultado;
    switch (option) {
        case 1:
            console.log(reserva);
            resultado = await apiReservaCreate(
                habitacionId,
                reserva.fechaStart,
                reserva.horaStart,
                reserva.fechaEnd,
                reserva.horaEnd
            );
            if (resultado) {
                Swal.fire({
                    icon: 'success',
                    title: 'Todo bien',
                    text: 'Su reserva se creo correctamente',
                    showConfirmButton: true,
                    confirmButtonText: 'Go  !'
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

            break;
    }
}