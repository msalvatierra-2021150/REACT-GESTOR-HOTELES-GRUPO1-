import React from 'react'
import { FormEvento } from './FormEvento'
import { Evento } from '../models/models.evento'

export const CreateEvento = () => {
  return (
    <>
      <div className="container">
        <h1>Crear un Evento</h1>
        <FormEvento eventoProp={Evento}
            titleButton={'Crear Evento'}
            option={1} />
    </div>
    </>
  )
}
