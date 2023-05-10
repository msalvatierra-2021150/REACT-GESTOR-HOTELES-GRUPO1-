import Swal from 'sweetalert2'
import { apiHotelCreate } from '../api/apiHotel'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
  nombreServicio: Yup.string().required('Su nombre es requerido'),
  descripcion: Yup.string().required('La direccion es requerido'),
  precio: Yup.number().required('El rating es requerido')

})
