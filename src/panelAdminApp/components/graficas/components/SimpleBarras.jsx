import React from 'react'
import { useState } from 'react'
import { apiHotel } from '../api/apiHotel'
import { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


export const SimpleBarras = () => {
    const [hotel, setHotel] = useState([]);
    const graficas = async()=>{
        const getListHotelFromAPI = await apiHotel();
       setHotel(getListHotelFromAPI);     
    }
    useEffect(() => {
        graficas();
        
      }, []);
    const prueba =() =>{

        console.log("hpla")
    }
    
    return(
       <>
       <h1>Hoteles mas reservados </h1>
       
        <ResponsiveContainer aspect={3}>
            <BarChart data={hotel} width={500} height={300} margin={{top:5,right:30,left:20,bottom:5}}>
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey="nombre">
                    
                </XAxis>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="numero_reservaciones" fill='#6b48ff' />
            </BarChart>
        
        </ResponsiveContainer>
       </>
    ) ;
     
}
