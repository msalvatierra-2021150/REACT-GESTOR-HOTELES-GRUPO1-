import React from 'react'
import { GraficasHabitaciones } from './GraficasHabitaciones'
import { Hotel } from '../models/hotel.models'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const MostrarGrafica = () => {
    const [hotel, setHotel] = useState(Hotel);
  return (
    <>
   
        <Link  className="boton boton-verde" to='/hoteles'>Regresar</Link>
        <GraficasHabitaciones/>
    </>
  )
}
