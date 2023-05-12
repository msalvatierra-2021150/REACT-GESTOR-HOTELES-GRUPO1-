import React from 'react'
import { useState } from 'react'
import { apiHotelHabitaciones } from '../api/apiHotel'
import { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Hotel } from "../models/hotel.models"
import { useLocation } from 'react-router-dom'


export const GraficasHabitaciones = () => {
  let { search } = useLocation();
    let query = new URLSearchParams(search);

    let idHotel = query.get('idHotel');
    console.log(Hotel);
    const [hotel, setHotel] = useState([]);
    const graficas = async()=>{
        const getListHotelFromAPI = await apiHotelHabitaciones(idHotel);
       setHotel(getListHotelFromAPI);     
    }
    useEffect(() => {
        graficas();
        
      }, []);
    console.log(hotel);
  return (
    <> 
     <h1>Habitaciones reservadas </h1>
     <ResponsiveContainer aspect={4}>
            <BarChart data={hotel} width={500} height={300} margin={{top:2,right:30,left:20,bottom:30}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="habitacion_id">
                    
                </XAxis>
                <YAxis  domain={[0, 'dataMax+5']}/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="cantidad" fill='#6b48ff' />
            </BarChart>
        
        </ResponsiveContainer>
    </>
  )
}
