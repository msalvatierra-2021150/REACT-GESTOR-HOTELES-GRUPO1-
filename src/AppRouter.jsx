import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListHotel } from "./hotel/components/ListHotel"

import { CreateHotel } from "./hotel/components/CreateHotel"
import { isAdminAppAuthenticated, isAdminHotelAuthenticated, isUserLogged, isUsuarioAuthenticated } from "./login/helpers/isUserAuthenticated"
import { ListServicios } from "./servicios/components/ListServicios"
import { Home } from "./home/components/Home"
import { PanelAdminApp } from "./panelAdminApp/components/PanelAdminApp"
import { PanelAdminHotel } from "./panelAdminHotel/components/PanelAdminHotel"
import { ListUsuario } from "./usuario/components/ListUsuario"
import { CreateUsuario } from "./usuario/components/CreateUsuario"
import { Footer } from "./Footer"

//PARTE REACT JHON
import { ListHabitaciones } from "./home/habitaciones/components/ListHabitaciones"
import { CreateReserva } from "./home/reservaciones/components/CreateReserva"
import { AddHabitacion } from "./home/reservaciones/components/AddHabitacion"
import { ListReserva } from "./home/reservaciones/components/ListReserva"
import { ListHabitacionesHotel } from "./home/habitaciones/components/ListHabitacionesHotel"

//PARTE REACT BELTRAN
import { ListRol } from "./panelAdminApp/components/rol/components/ListRol"
import { CreateRol } from "./panelAdminApp/components/rol/components/CreateRol"

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/login" element={!isUserLogged() ? <Login/> : <Navigate to="/home" />}>
                </Route>
                <Route path="/perfil" element={isUserLogged() ? <ListUsuario/> : <Navigate to="/login" />}>
                </Route>
                <Route path="/signin" element={!isUserLogged() ? <CreateUsuario/> : <Navigate to="/login" />}>
                </Route>
                <Route path="/login" element={!isUserLogged() ? <Login /> : <Navigate to="/home" />}>
                </Route>


                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/panel-adminapp" element={isAdminAppAuthenticated() ? (<PanelAdminApp />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}
                <Route path="/hoteles" element={isAdminAppAuthenticated() ? (<ListHotel />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al agregar Hotel*/}
                <Route path="/create-hotel" element={isAdminAppAuthenticated() ? (<CreateHotel />) : (<Navigate to="/login" />) } >
                </Route>
                 {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Rol*/}
                 <Route path="/roles" element={isAdminAppAuthenticated() ? (<ListRol />) : (<Navigate to="/login" />) } >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al agregar Rol*/}
                <Route path="/create-rol" element={isAdminAppAuthenticated() ? (<CreateRol />) : (<Navigate to="/login" />) } >
                </Route>
                
                {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                <Route path="/panel-adminhotel" element={isAdminHotelAuthenticated() ? (<PanelAdminHotel/>) : (<Navigate to="/login" />) } >
                </Route>
                
                 {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/servicios" element={isAdminHotelAuthenticated() ? (<ListServicios/>) : (<Navigate to="/login" />) } >
                </Route>

                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isUsuarioAuthenticated() ? (<Home />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL USUARIO EN HABITACIONES */}
                <Route path="/habitaciones" element={isUsuarioAuthenticated() ? (<ListHabitaciones />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL USUARIO EN HABITACIONES */}
                <Route path="/habitaciones-hotel" element={isUsuarioAuthenticated() ? (<ListHabitacionesHotel />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL USUARIO EN RESERVACIONES */}
                <Route path="/reservas-create" element={isUsuarioAuthenticated() ? (<CreateReserva />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/reservas-add" element={isUsuarioAuthenticated() ? (<AddHabitacion />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/reservas-show" element={isUsuarioAuthenticated() ? (<ListReserva />) : (<Navigate to="/login" />)} >
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}
