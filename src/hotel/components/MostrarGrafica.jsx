import React from 'react'
import { GraficasHabitaciones } from './GraficasHabitaciones'
import { Hotel } from '../models/hotel.models'
import { useEffect, useState } from "react";

export const MostrarGrafica = () => {
    const [hotel, setHotel] = useState(Hotel);
  return (
    <>
        <GraficasHabitaciones/>
    </>
  )
}
