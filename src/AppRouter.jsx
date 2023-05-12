import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListHotel } from "./hotel/components/ListHotel"

import { CreateHotel } from "./hotel/components/CreateHotel"
import { isAdminAppAuthenticated, isAdminHotelAuthenticated, isUserLogged, isUsuarioAuthenticated } from "./login/helpers/isUserAuthenticated"
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
import { CreateFactura } from "./home/generar factura/components/CreateFactura"

//PARTE REACT BELTRAN
import { ListRol } from "./panelAdminApp/components/rol/components/ListRol"
import { CreateRol } from "./panelAdminApp/components/rol/components/CreateRol"

//Parte REACT ANDRES
import { ListDepartamentos } from "./panelAdminApp/components/departamentos/components/ListDepartamentos"
import { ListUsuarios } from "./panelAdminApp/components/usuarios/components/ListUsuarios"
import { CreateDepartamentos } from "./panelAdminApp/components/departamentos/components/CreateDepartamentos"

//PARTE REACT SAMUEL
import { ListHabitacion } from "./habitacion/components/ListHabitacion"
import { CreateHabitacion } from "./habitacion/components/CreateHabitacion"
//import { CreateFactura } from "./hotel/components/CreateFactura"
//import { ListFactura } from "./hotel/components/ListFactura"

//PARTE REACT CEBALLOS
import { ListServicios } from "./servicios/components/ListServicios"
import { ListTipoEvento } from "./tipoEvento/components/ListTipoEvento"
import { CreateServicio } from "./servicios/components/CreateServicio"
import { CreateTipoEvento } from "./tipoEvento/components/CreateTipoEvento"

//PARTE REACT AMBROSIO
import ListFactura from "./Factura/components/ListFactura";
import { ListEvento } from "./panelAdminHotel/components/Evento/components/ListEvento";
import { CreateEvento } from "./panelAdminHotel/components/Evento/components/CreateEvento";
import { ListCarrServicios } from "./home/components/carritoServicio/components/ListCarrServicios";
import { ListCarr } from "./home/components/carritoServicio/components/ListCarr";
import { SimpleBarras } from "./panelAdminApp/components/graficas/components/SimpleBarras";

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/login" element={!isUserLogged() ? <Login /> : <Navigate to="/home" />}>
                </Route>
                <Route path="/perfil" element={isUserLogged() ? <ListUsuario /> : <Navigate to="/login" />}>
                </Route>
                <Route path="/signin" element={!isUserLogged() ? <CreateUsuario /> : <Navigate to="/login" />}>
                </Route>
                <Route path="/factura" element={isAdminAppAuthenticated() || isAdminHotelAuthenticated() || isUsuarioAuthenticated ? (<ListFactura />) : (<Navigate to="/login" />)}>
                </Route>

                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/panel-adminapp" element={isAdminAppAuthenticated() ? (<PanelAdminApp />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}
                <Route path="/hoteles" element={isAdminAppAuthenticated() ? (<ListHotel />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al agregar Hotel*/}
                <Route path="/create-hotel" element={isAdminAppAuthenticated() ? (<CreateHotel />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Rol*/}
                <Route path="/roles" element={isAdminAppAuthenticated() ? (<ListRol />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al agregar Rol*/}
                <Route path="/create-rol" element={isAdminAppAuthenticated() ? (<CreateRol />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Departamentos*/}
                <Route path="/departamentos" element={isAdminAppAuthenticated() ? (<ListDepartamentos />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al agregar Departamentos*/}
                <Route path="/create-departamento" element={isAdminAppAuthenticated() ? (<CreateDepartamentos />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Usuarios*/}
                <Route path="/usuarios" element={isAdminAppAuthenticated() ? (<ListUsuarios />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL ADMIN_APP EN TIPO DE EVENTO */}
                <Route path="/tipoevento" element={isAdminAppAuthenticated() ? (<ListTipoEvento />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/create-tipoevento" element={isAdminAppAuthenticated() ? (<CreateTipoEvento />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/graficas" element={isAdminAppAuthenticated() ? (<SimpleBarras />) : (<Navigate to="/login" />)}></Route>


                {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                <Route path="/panel-adminhotel" element={isAdminHotelAuthenticated() ? (<PanelAdminHotel />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN HABITACIONES */}
                <Route path="/habitaciones" element={isAdminHotelAuthenticated() ? (<ListHabitacion />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/create-habitacion" element={isAdminHotelAuthenticated() ? (<CreateHabitacion />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/servicios" element={isAdminHotelAuthenticated() ? (<ListServicios />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/create-servicio" element={isAdminHotelAuthenticated() ? (<CreateServicio />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/list-evento" element={isAdminHotelAuthenticated() ? (<ListEvento />) : (<Navigate to="/login" />)}>
                </Route>
                <Route path="/create-evento" element={isAdminHotelAuthenticated() ? (<CreateEvento />) : (<Navigate to="/login" />)}>
                </Route>


                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isUsuarioAuthenticated() ? (<Home />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL USUARIO EN HABITACIONES */}
                <Route path="/see-habitaciones" element={isUsuarioAuthenticated() ? (<ListHabitaciones />) : (<Navigate to="/login" />)} >
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
                <Route path="/carrito-servicios" element={isUsuarioAuthenticated() ? <ListCarrServicios /> : <Navigate to="/login" />}>
                </Route>
                <Route path="/carrito" element={isUsuarioAuthenticated() ? <ListCarr /> : <Navigate to="/login" />}>
                </Route>
                <Route path="/generar-factura" element={isUsuarioAuthenticated() ? <CreateFactura /> : <Navigate to="/login" />}>
                </Route>
            </Routes>
            <Footer />
        </>
    )
}
