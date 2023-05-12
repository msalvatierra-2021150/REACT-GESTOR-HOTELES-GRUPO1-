import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListHabitacion } from "./habitacion/components/ListHabitacion"

import { CreateHabitacion } from "./habitacion/components/CreateHabitacion"
import { isAdminAppAuthenticated, isAdminHotelAuthenticated, isUserLogged, isUsuarioAuthenticated } from "./login/helpers/isUserAuthenticated"
import { ListServicios } from "./servicios/components/ListServicios"
import { Home } from "./home/components/Home"
import { PanelAdminApp } from "./panelAdminApp/components/PanelAdminApp"
import { PanelAdminHotel } from "./panelAdminHotel/components/PanelAdminHotel"
import { CreateFactura } from "./hotel/components/CreateFactura"
import { ListFactura } from "./hotel/components/ListFactura"


export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/login" element={!isUserLogged() ? <Login /> : <Navigate to="/home" />}>
                </Route>

                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/panel-adminapp" element={isAdminAppAuthenticated() ? (<PanelAdminApp />) : (<Navigate to="/login" />)} >
                </Route>
                {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}

                {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                <Route path="/panel-adminhotel" element={isAdminHotelAuthenticated() ? (<PanelAdminHotel />) : (<Navigate to="/login" />)} >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/servicios" element={isAdminHotelAuthenticated() ? (<ListServicios />) : (<Navigate to="/login" />)} >
                </Route>
                <Route path="/habitaciones" element={isAdminHotelAuthenticated() ? (<ListHabitacion />) : (<Navigate to="/login" />)} >
                </Route>

                <Route path="/create-habitacion" element={isAdminHotelAuthenticated() ? (<CreateHabitacion />) : (<Navigate to="/login" />)} >
                </Route>


                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isUsuarioAuthenticated() ? (<Home />) : (<Navigate to="/login" />)} >
                </Route>

                <Route path="/create-factura" element={isUsuarioAuthenticated() ? (<CreateFactura/>) : (<Navigate to="/login" />) } >
                </Route>

                
                <Route path="/factura" element={isUsuarioAuthenticated() ? (<ListFactura/>) : (<Navigate to="/login" />) } >
                </Route>
            </Routes>
        </>
    )
}
