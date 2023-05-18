import React from 'react'
import { useState } from 'react'
import { apiFacturaCreate } from '../api/apiFactura';
import Swal from 'sweetalert2';

export const CreateFactura = () => {
  const [nit, setNit] = useState("");

  const onSubmitEvent = (event) => {
    event.preventDefault();
    if (nit.trim().length < 1) return;
    setNit('');
    createFactura(nit);
  }

  const createFactura = async (NITReceptor) => {
    const response = await apiFacturaCreate(NITReceptor);
    if (response) {
      localStorage.removeItem('idReservacion');
      localStorage.removeItem('existeCar');
      Swal.fire({
        icon: 'success',
        title: 'Factura creada',
        text: 'Su factura se ha generado exitosamente',
        showConfirmButton: true,
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/home'
        }
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'No se ha podido generar su factura',
        showConfirmButton: true,
        confirmButtonText: "Ok"
      })
    }
  }

  return (
    <main>
      <form onSubmit={onSubmitEvent} className='formulario'>
        <div className="mb-3">
          <label className="form-label">Ingresa tu numero de NIT: </label>
          <input type="text"
            className="form-control"
            value={nit}
            onChange={({ target }) => { setNit(target.value) }}
            required
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={onSubmitEvent}>Aceptar</button>
      </form>
    </main>
  )
}
